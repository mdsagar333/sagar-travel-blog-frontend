import React from "react";
import { Navigate, useLocation } from "react-router";
import useContextAPI from "../../Hooks/useContextAPI";
import Loading from "./Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user, userLoading } = useContextAPI();

  if (userLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
