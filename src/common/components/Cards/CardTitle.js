/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CardTitle = ({ children, className }) => {
  return (
    <div className={classnames("card-title", {}, className)}>{children}</div>
  );
};

CardTitle.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardTitle;
