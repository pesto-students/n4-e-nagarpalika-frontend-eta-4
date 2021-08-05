/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

// TODO: testing pending
const StyledContainer = styled.div`
  ${({ center }) => {
    if (center)
      return `
    display: flex;
    justify-content: center
    `;
  }}
`;

const Container = ({
  children,
  center,
  className,
  sm,
  md,
  lg,
  xl,
  xxl,
  fluid,
  style,
  ...rest
}) => {
  return (
    <StyledContainer
      className={classnames(
        "container",
        {
          "container-sm": sm,
          "container-md": md,
          "container-lg": lg,
          "container-xl": xl,
          "container-xxl": xxl,
          "container-fluid": fluid,
        },
        className
      )}
      center
      style={style}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  className: "",
  style: {},
};

export default Container;
