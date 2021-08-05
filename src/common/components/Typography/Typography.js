/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Display = ({ size, children }) => {
  return <h1 className={classnames(`display-${size}`)}>{children}</h1>;
};

Display.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export const Heading = ({ size, children, className }) => {
  return (
    <p style={{ margin: 0 }} className={classnames(`h${size}`, className)}>
      {children}
    </p>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: "",
};
