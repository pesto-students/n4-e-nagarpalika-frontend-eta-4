/** @format */

import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button``;

const Button = ({ buttonType, type, children, onClick }) => {
  return (
    <StyledButton
      type={buttonType}
      className={`btn btn-${type}`}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonType: "button",
  type: "light",
};

export default Button;
