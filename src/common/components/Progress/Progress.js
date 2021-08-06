/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { BOOTSTRAP_TYPES } from "../../contants";

const Progress = ({
  nowValue,
  minValue,
  maxValue,
  children,
  bgColor,
  striped,
  animated,
}) => {
  return (
    <div className="progress">
      <div
        className={classnames(
          "progress-bar",
          typeof bgColor !== "undefined" ? `bg-${bgColor}` : null,
          {
            "progress-bar-striped": striped,
            "progress-bar-animated": animated,
          }
        )}
        role="progressbar"
        aria-valuenow={nowValue}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
      >
        {children}
      </div>
    </div>
  );
};

Progress.propTypes = {
  children: PropTypes.string,
  nowValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  bgColor: PropTypes.oneOf(Object.values(BOOTSTRAP_TYPES)),
  striped: PropTypes.bool,
  animated: PropTypes.bool,
};

Progress.defaultProps = {
  striped: false,
  animated: false,
};

export default Progress;
