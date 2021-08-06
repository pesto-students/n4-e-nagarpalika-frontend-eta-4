/** @format */

import React from "react";
import PropTypes from "prop-types";

const CloseButton = ({ disabled }) => {
  return (
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      disabled={disabled}
    />
  );
};

CloseButton.propTypes = {
  disabled: PropTypes.bool,
};

CloseButton.defaultProps = {
  disabled: false,
};

export default CloseButton;
