import React, { useState, useEffect } from "react";
import firebaseInitializationAuth from "../Firebase/firebase.initialization";

firebaseInitializationAuth();
const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  return {
    user,
    userLoading,
    authError,
    admin,
  };
};

export default useFirebaseAuth;
