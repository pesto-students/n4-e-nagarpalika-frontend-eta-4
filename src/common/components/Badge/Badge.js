/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

import { BOOTSTRAP_TYPES } from "../../contants";

const StyledBadge = styled.span``;

const Badge = ({ className, children, bgColor, isPill, style }) => {
  return (
    <StyledBadge
      className={classnames(
        "badge",
        `bg-${bgColor}`,
        {
          "rounded-pill": isPill,
          "text-dark":
            bgColor === BOOTSTRAP_TYPES.info ||
            bgColor === BOOTSTRAP_TYPES.warning ||
            bgColor === BOOTSTRAP_TYPES.light,
        },
        className
      )}
      style={{
        border: bgColor === BOOTSTRAP_TYPES.light ? "1px solid grey" : "",
        ...style,
      }}
    >
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.oneOf(Object.values(BOOTSTRAP_TYPES)).isRequired,
  isPill: PropTypes.bool,
  style: PropTypes.object,
};

Badge.defaultProps = {
  isPill: false,
  style: {},
};

export default Badge;
