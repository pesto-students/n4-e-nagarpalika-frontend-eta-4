/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CardText = ({ children, className }) => {
  return (
    <div className={classnames("card-text", {}, className)}>{children}</div>
  );
};

CardText.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardText;
