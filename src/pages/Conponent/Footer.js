import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.PNG";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ccc" }} className="">
      <div className="footer-top container my-4 py-4">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" className="footer_logo" />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <p className="mb-1">Subscribe now to get daily updates</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center p-2 bg-dark text-white">
        Copyright &copy; 2022 all rights reserved by mohammed sagar ali
      </p>
    </footer>
  );
};

export default Footer;
