/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledRow = styled.div``;

const Row = ({ children, className, style, ...rest }) => {
  return (
    <StyledRow className={classnames("row", className)} style={style} {...rest}>
      {children}
    </StyledRow>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

export default Row;
