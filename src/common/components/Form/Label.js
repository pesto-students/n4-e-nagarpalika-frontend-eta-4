/** @format */

import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, id }) => {
  return (
    <label htmlFor={id} className="form-label">
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
