import React from "react";
import { useNavigate, Navigate } from "react-router";
import useContextAPI from "../../Hooks/useContextAPI";

const CheckVerify = ({ children }) => {
  const { user, emailVerification } = useContextAPI();
  const navigate = useNavigate();
  console.log(emailVerification, user);
  if (emailVerification) {
    if (!user.emailVerified) {
      return <Navigate to="/verify-email" />;
    }
  }

  return children;
};

export default CheckVerify;
