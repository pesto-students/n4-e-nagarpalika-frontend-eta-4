/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { BOOTSTRAP_TYPES } from "../../contants";

const Spinner = ({ type, bgColor, small }) => {
  return (
    <div
      className={classnames(
        `spinner-${type}`,
        typeof bgColor !== "undefined" ? `bg-${bgColor}` : null,
        {
          "spinner-border-sm": small,
        }
      )}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {
  type: PropTypes.oneOf(["border", "grow"]),
  bgColor: PropTypes.oneOf(Object.values(BOOTSTRAP_TYPES)),
  small: PropTypes.bool,
};

Spinner.propTypes = {
  small: false,
};

export default Spinner;
