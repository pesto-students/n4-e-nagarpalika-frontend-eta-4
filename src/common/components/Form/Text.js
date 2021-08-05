/** @format */

import React from "react";
import PropTypes from "prop-types";


const Text = ({ children, id }) => {
  return (
    <div id={id} className="form-text">
      {children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
