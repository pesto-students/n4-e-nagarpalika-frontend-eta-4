/** @format */

import React, { useState } from "react";

import { Link } from "react-router-dom";
import classnames from "classnames";

import CreateIssueTypes from "./createIssueTypes";
import CreateAdmin from "./createAdmin";

import { Container } from "./styles";
import "./toggleChange.css";

const AdminActions = () => {
  const [bool, setBool] = useState(true);

  return (
    <Container className="row justify-content-center align-items-center">
      <div className="col-8">
        <ul className="nav nav-tabs justify-content-center lg-10">
          <li className="nav-item">
            <Link
              className={classnames("nav-link", {
                active: bool,
              })}
              aria-current="page"
              to="#"
              onClick={() => setBool(true)}
            >
              Create Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={classnames("nav-link", {
                active: !bool,
              })}
              to="#"
              onClick={() => setBool(false)}
            >
              Create Issue Types
            </Link>
          </li>
        </ul>
        {bool ? <CreateAdmin /> : <CreateIssueTypes />}
      </div>
    </Container>
  );
};

export default AdminActions;
