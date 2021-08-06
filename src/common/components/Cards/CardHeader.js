/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CardHeader = ({ children, className, style }) => {
  return (
    <div className={classnames("card-header", {}, className)} style={style}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.element.isRequired,
};

export default CardHeader;
