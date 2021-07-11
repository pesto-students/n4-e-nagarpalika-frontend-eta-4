/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import useAuth from "../modules/auth/authContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      // eslint-disable-next-line
      {...rest}
      // eslint-disable-next-line
      render={(props) => {
        // eslint-disable-next-line
        return currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
