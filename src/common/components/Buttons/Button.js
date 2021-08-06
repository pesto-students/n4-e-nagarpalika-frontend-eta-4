/** @format */

import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import { BOOTSTRAP_TYPES } from "../../contants";

const StyledButton = styled.button`
  border-radius: 8px;
`;

const Button = ({
  buttonType,
  type,
  children,
  onClick,
  className,
  disabled,
  style,
  ...rest
}) => {
  return (
    <StyledButton
      type={buttonType}
      className={classnames(`btn btn-${type}`, className, {})}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  type: PropTypes.oneOf(Object.values(BOOTSTRAP_TYPES)).isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonType: "button",
  type: "light",
};

export default Button;
