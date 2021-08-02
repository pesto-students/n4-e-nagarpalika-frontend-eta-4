/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import NotificationCard from "../Notifications/Card";

import { ACCOUNT_TYPE } from "../../contants";
import isVisibleByRoute from "../../../utils/isVisibleByRoute";

import { logOut } from "../../../modules/auth/actionCreators";

// eslint-disable-next-line no-unused-vars
import { Span, Nav, NotifTime, FLex } from "./styles";

const HeaderNav = ({ actionLogout }) => {
  const account = useSelector((state) => state.account);
  const { accountType } = account;
  const history = useHistory();
  const [hiddenNavs, setHiddenNavs] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const routes = ["/", "/login", "register"];

    setHiddenNavs(isVisibleByRoute(pathname, routes));
  }, [pathname]);

  return (
    <Nav
      hiddenNavs
      className="navbar navbar-expand-lg navbar-light shadow bg-light"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/e-nagar-palika.png"
            alt=""
            width="100%"
            height="auto"
            className="d-inline-block align-text-top"
          />
        </Link>
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
          {!hiddenNavs ? (
            <FLex className="d-flex">
              <div className="nav-item dropdown">
                <div
                  role="button"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#notificationModal"
                >
                  <i className="bi bi-bell pos position-relative h3">
                    {accountType === ACCOUNT_TYPE.admin ? (
                      <Span className="position-absolute top-0 start-100 p-1 translate-middle badge rounded-circle bg-danger">
                        <span className="text-white h6">99+</span>
                      </Span>
                    ) : null}
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
                          id="notification"
                        >
                          Notifications center
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <NotificationCard
                          {...{
                            id: "2",
                            text: "Status changed for your grievance ‘Traffic Light not working Near HSR Layout’.",
                            createdAt: new Date(2021, 1).toUTCString(),
                            issueId: "60fc7eef126fe5023c98ecfc",
                          }}
                        />
                      </div>
                      {/* <div>
                          <a href="/grievances/60fc7eef126fe5023c98ecfc">
                            <div className="alert alert-secondary">
                              Status changed for your grievance ‘Traffic Light
                              not working Near HSR Layout’.
                              <NotifTime className="small text-gray-500">
                                7 min ago
                              </NotifTime>
                            </div>
                          </a>
                        </div>*/}
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
              <div className="navbar-nav me-auto mb-2 mb-lg-0" />
              <div className="dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle h4" />
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton2"
                >
                  {/* 
                  <li>
                    <Link className="dropdown-item" to="/account">
                      My Profile
                    </Link>
                  </li> 
                  */}
                  <li>
                    <Link className="dropdown-item" to="/account">
                      My profile
                    </Link>
                  </li>
                  {accountType === ACCOUNT_TYPE.admin ? (
                    <li>
                      <Link className="dropdown-item" to="/admin-action">
                        Admin actions
                      </Link>
                    </li>
                  ) : null}
                  <li>
                    <a
                      href="/#"
                      className="dropdown-item"
                      onClick={() => {
                        // e.preventDefault();
                        actionLogout();
                        history.push("/");
                      }}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </FLex>
          ) : null}
        </div>
      </div>
    </Nav>
  );
};

HeaderNav.propTypes = {
  actionLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  actionLogout: logOut,
};

export default connect(null, mapDispatchToProps)(HeaderNav);
