/** @format */

import React from "react";
import PropTypes from "prop-types";


export const Alert = ({ content, type }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {content}
    </div>
  );
};

Alert.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
};

Alert.defaultProps = {
  type: "light",
};
