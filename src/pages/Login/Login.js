import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextAPI from "../../Hooks/useContextAPI";
import Header from "../Conponent/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { googleSignIn, logInUserWithEmail } = useContextAPI();
  const location = useLocation();
  let navigate = useNavigate();

  console.log(location);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    logInUserWithEmail(email, password, location, navigate);
  };

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn(location, navigate);
  };
  return (
    <>
      <Header />
      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="mb-3">Sign in</h1>
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control "
                    onChange={handleChangeEmail}
                    required
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-2">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control"
                    onChange={handleChangePassword}
                    required
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-block"
                >
                  Sign in
                </button>
                <p className="my-3">
                  Don't have an account? {}
                  <Link
                    to="/register"
                    className="text-decoration-none"
                    style={{ color: "#393f81" }}
                  >
                    Sign up here
                  </Link>
                </p>
                <div className="divider d-flex align-items-center my-2">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
              </form>
              <button
                className="btn btn-primary btn-block"
                style={{ backgroundColor: "#34A853" }}
                onClick={handleGoogleSignIn}
              >
                <i className="fab fa-google me-2"></i>Continue with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
