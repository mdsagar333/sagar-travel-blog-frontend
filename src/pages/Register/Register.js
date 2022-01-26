import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <section className="vh-100">
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
              <h1 className="mb-3">Sign up</h1>
              <form>
                {/* <!-- Name input --> */}
                <div className="form-outline mb-2">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Name
                  </label>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control"
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
                  Sign up
                </button>
                <p class="my-3">
                  Already have an account? {}
                  <Link
                    to="/login"
                    className="text-decoration-none"
                    style={{ color: "#393f81" }}
                  >
                    Sing in here
                  </Link>
                </p>
                <div className="divider d-flex align-items-center my-2">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: "#34A853" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google me-2"></i>Continue with Google
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
