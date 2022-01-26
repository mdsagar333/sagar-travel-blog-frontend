import React, { createContext, useState, useEffect } from "react";
import useFirebaseAuth from "../Hooks/useFirebaseAuth";

export const contextAPI = createContext();

const AllContext = ({ children }) => {
  const firebase = useFirebaseAuth();
  console.log(firebase);
  return (
    <contextAPI.Provider value={{ ...firebase }}>
      {children}
    </contextAPI.Provider>
  );
};

export default AllContext;
