/** @format */

import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Span, Nav, NotifTime } from "./styles";

const HeaderNav = ({ isSignedIn }) => {
  const [hiddenNavs, setHiddenNavs] = useState(false);
  const location = useLocation();
  const history = useHistory();
  console.log(location, isSignedIn);
  const { pathname } = location;
  useEffect(() => {
    if (pathname === "/" || pathname === "/login" || pathname === "/resister") {
      setHiddenNavs(true);
    } else {
      setHiddenNavs(false);
    }
  }, [pathname]);
  return (
    <Nav
      style={{
        width: hiddenNavs ? "100%" : null,
        margin: hiddenNavs ? "0px" : null,
      }}
      className="navbar navbar-expand-lg navbar-light shadow bg-light"
    >
      <div className="container-fluid">
        <a href="/">
          <Link to="" className="navbar-brand" href="/">
            <img
              src="/e-nagar-palika.png"
              alt=""
              width="100%"
              height="auto"
              className="d-inline-block align-text-top"
            />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarHeader">
          <div className="navbar-nav me-auto mb-2 mb-lg-0" />
          {pathname === "/" ? (
            <div>
              <div className="nav-item">
                <Link
                  to=""
                  className="nav-link "
                  onClick={() => {
                    window.scrollTo({
                      behavior: "smooth",
                      top: window.innerHeight,
                    });
                  }}
                >
                  Issue Tracker
                </Link>
              </div>
            </div>
          ) : null}
          {!hiddenNavs ? (
            <div className="d-flex">
              <div className="nav-item dropdown">
                <div
                  role="button"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#notificationModal"
                >
                  <i className="bi bi-bell pos position-relative h3">
                    <Span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-circle bg-danger">
                      <span className="text-white h6">99+</span>
                    </Span>
                  </i>
                </div>
                <div
                  className="modal fade"
                  id="notificationModal"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title background-secondary"
                          id="staticBackdropLabel"
                        >
                          Notifications Center
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div>
                          <a href="/grievances/60fc7eef126fe5023c98ecfc">
                            <div className="alert alert-secondary">
                              Status changed for your grievance ‘Traffic Light
                              not working Near HSR Layout’.
                              <NotifTime className="small text-gray-500">
                                7 min ago
                              </NotifTime>
                            </div>
                          </a>
                        </div>
                        <div className="modal-footer">
                          <a
                            type="button"
                            className="btn btn-primary"
                            href="/notifications"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-nav me-auto mb-2 mb-lg-0" />
              <div className="dropdown">
                <Link
                  to=""
                  className="nav-link dropdown-toggle"
                  onClick={() => {}}
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle h4" />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <Link
                      to=""
                      className="dropdown-item"
                      onClick={() => {
                        history.push("/account");
                      }}
                    >
                      Update Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="dropdown-item"
                      onClick={() => {
                        history.push("/account");
                      }}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="dropdown-item" onClick={() => {}}>
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Nav>
  );
};

export default HeaderNav;