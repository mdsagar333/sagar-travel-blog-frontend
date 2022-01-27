import React from "react";
import { Link, Outlet } from "react-router-dom";
import useContextAPI from "../../Hooks/useContextAPI";

const Dashboard = () => {
  const { user, admin } = useContextAPI();
  return (
    <div>
      <div className="dashboard_container">
        <h1 className="p-4 text-center bg-primary text-light mb-0">
          Wellcome to your dashboard
        </h1>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-3 col-md-3 bg-dark"
              style={{ minHeight: "100vh" }}
            >
              {user && admin ? (
                <ul className="nav flex-column py-3 ps-0 pe-1">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="experiences">
                      All Experiences
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="pending-experiences">
                      Pending Experiences
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="make-admin">
                      Make Admin
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="nav flex-column py-3 ps-0 pe-1">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="my-experiences"
                    >
                      My Experiences
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="add-experience">
                      Add New Experience
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="col-8 col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
