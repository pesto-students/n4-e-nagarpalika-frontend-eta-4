/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledCardBody = styled.div``;

const CardBody = ({ children, className, style }) => {
  return (
    <StyledCardBody
      className={classnames("card-body", {}, className)}
      style={style}
    >
      {children}
    </StyledCardBody>
  );
};

CardBody.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default CardBody;
