/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CardFooter = ({ children, className }) => {
  return (
    <div className={classnames("card-footer", {}, className)}>{children}</div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default CardFooter;
