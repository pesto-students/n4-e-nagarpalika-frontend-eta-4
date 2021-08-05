/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ButtonGroup = ({ children, isVertical }) => {
  return (
    <div
      className={classnames("btn-group", {
        "btn-group-vertical": isVertical,
      })}
      role="group"
      aria-label="button group"
    >
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isVertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  isVertical: false,
};

export default ButtonGroup;
