import React from "react";
import { Navigate, useLocation } from "react-router";
import useContextAPI from "../../Hooks/useContextAPI";

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user } = useContextAPI();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
