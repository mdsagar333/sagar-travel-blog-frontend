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

firebaseInitializationAuth();
const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [emailVerification, setEmailVerification] = useState("");

  const auth = getAuth();

  // create user with email password
  const createUserWithEmail = async (email, password, name, navigate) => {
    setUserLoading(true);
    setAuthError("");
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // saving to database
        const user = userCredential.user;
        // redirecting to home page
        // navigate("/");
      })
      .catch((err) => {
        setAuthError(err.message);
      });
    await sendEmailVerification(auth.currentUser).then(() => {
      setEmailVerification("Verification email was sent to");
    });
    await updateProfile(auth.currentUser, { displayName: name }).then(() => {
      console.log("Profile updated");
    });
    console.log("navigate");
    navigate("/", { replace: true });
  };

  // email sign in
  const logInUserWithEmail = (email, password, location, history) => {
    setUserLoading(true);
    setAuthError("");
    const redirectURL = location?.state?.from?.pathname || "/";
    console.log(redirectURL);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history(redirectURL);
        setUserLoading(false);
      })
      .catch((err) => {
        setAuthError(err.message);
        setUserLoading(false);
      });
  };

  // google sign in
  const googleSignIn = (location, navigate) => {
    const googleProvider = new GoogleAuthProvider();
    const redirectURL = location?.state?.from?.pathname || "/";
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      console.log(result.user);

      navigate(redirectURL);
    });
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
        setUser(user);
        setAdmin(user);
        setUserLoading(false);
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
    googleSignIn,
    logInUserWithEmail,
    createUserWithEmail,
    logout,
  };
};

export default useFirebaseAuth;
