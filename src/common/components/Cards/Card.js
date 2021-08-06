/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 12px;
`;

const Card = ({ children, className, shadow, style }) => {
  return (
    <StyledCard
      className={classnames(
        "card",
        {
          shadow,
        },
        className
      )}
      style={style}
    >
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  shadow: PropTypes.bool,
};

Card.defaultProps = {
  shadow: true,
};

export default Card;
