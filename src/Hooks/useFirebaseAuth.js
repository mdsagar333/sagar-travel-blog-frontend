import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import firebaseInitializationAuth from "../Firebase/firebase.initialization";
import { async } from "@firebase/util";

firebaseInitializationAuth();
const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [emailVerification, setEmailVerification] = useState("");

  const auth = getAuth();

  // create user with email password
  const createUserWithEmail = async (email, password, name, history) => {
    setAuthError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // saving to database
        const user = userCredential.user;
        // redirecting to home page
        updateProfile(auth.currentUser, { displayName: name }).then(
          async () => {
            console.log("user updated");
            await fetch(
              "https://gentle-retreat-89471.herokuapp.com/api/v1/user",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  uid: auth.currentUser.uid,
                  isNeedToVerify: true,
                }),
              }
            );
            await sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              // ...
              console.log("verification sent from register");
            });
            history("/verify-email", { replace: true });
          }
        );
      })
      .catch((err) => {
        setAuthError(err.message);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  // email sign in
  const logInUserWithEmail = (email, password, location, history) => {
    setAuthError("");
    const redirectURL = location?.state?.from?.pathname || "/";
    console.log(redirectURL);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        // const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/admin/${result.user.uid}`;
        // const admin = await fetch(url).then((res) => res.json());
        // console.log(admin);
        // setAdmin(admin.isAdmin);
        history(redirectURL);
        setUserLoading(false);
      })
      .catch((err) => {
        setAuthError(err.message);
        setUserLoading(false);
      });
  };

  // google sign in
  const googleSignIn = async (location, navigate) => {
    const googleProvider = new GoogleAuthProvider();
    const redirectURL = location?.state?.from?.pathname || "/";
    await signInWithPopup(auth, googleProvider).then(async (result) => {
      setUser(result.user);
      await fetch("https://gentle-retreat-89471.herokuapp.com/api/v1/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          isNeedToVerify: true,
          role: "user",
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      // const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/admin/${result.user.uid}`;
      // const admin = await fetch(url).then((res) => res.json());
      // console.log(admin);
      // setAdmin(admin.isAdmin);
    });
    await sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
        console.log("verification sent");
      })
      .catch((err) => {
        console.log("verification err");
        console.log(err);
      });
    navigate(redirectURL);
  };

  // logout
  const logout = () => {
    setUserLoading(true);
    signOut(auth)
      .then(() => {
        console.log("logout successful");
      })
      .catch((err) => {})
      .finally(() => {
        setUserLoading(false);
      });
  };

  // observer
  useEffect(() => {
    setUserLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const checkAdmin = async () => {
          const url = `https://gentle-retreat-89471.herokuapp.com/api/v1/admin/${user.uid}`;
          // const url = `http://127.0.0.1:5000/api/v1/admin/${user.uid}`;
          const admin = await fetch(url).then((res) => res.json());
          console.log(admin);
          setUser(user);
          setAdmin(admin.isAdmin);
          setUserLoading(false);
          setEmailVerification(admin.isNeedToVerify);
        };
        checkAdmin();
      } else {
        setUser(null);
        setAdmin(null);
        setUserLoading(false);
      }
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    userLoading,
    authError,
    admin,
    emailVerification,
    googleSignIn,
    logInUserWithEmail,
    createUserWithEmail,
    logout,
  };
};

export default useFirebaseAuth;
