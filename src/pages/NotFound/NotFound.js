import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container my-5 mx-auto">
      <h1>404 Not found.</h1>
      <Link className="btn btn-primary" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
