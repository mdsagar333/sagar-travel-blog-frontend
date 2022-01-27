import React from "react";
import useContextAPI from "../../Hooks/useContextAPI";
import Header from "../Conponent/Header";
import { Navigate } from "react-router-dom";

const EmailVerify = () => {
  const { user } = useContextAPI();
  if (user.emailVerified) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">
          A verification email was sent to your email. Please verify your email
          address.
        </h1>
      </div>
    </div>
  );
};

export default EmailVerify;
