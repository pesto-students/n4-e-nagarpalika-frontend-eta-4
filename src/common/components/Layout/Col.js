/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledCol = styled.div``;

const Col = ({
  children,
  className,
  style,
  col,
  size,
  sm,
  md,
  lg,
  xl,
  xxl,
  auto,
}) => {
  return (
    <StyledCol
      className={classnames(
        {
          col: col,
          "col-auto": auto,
        },
        typeof size !== "undefined" ? `col-${size}` : null,
        typeof sm !== "undefined" ? `col-sm-${sm}` : null,
        typeof md !== "undefined" ? `col-md-${md}` : null,
        typeof lg !== "undefined" ? `col-lg-${lg}` : null,
        typeof xl !== "undefined" ? `col-xl-${xl}` : null,
        typeof xxl !== "undefined" ? `col-xxl-${xxl}` : null,
        className
      )}
      style={style}
    >
      {children}
    </StyledCol>
  );
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

export default Col;
