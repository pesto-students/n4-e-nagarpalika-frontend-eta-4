/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledSelect = styled.select`
  border-radius: 12px;
`;

const Select = ({
  children,
  id,
  className,
  onChange,
  value,
  disabled,
  ...rest
}) => {
  return (
    <StyledSelect
      id={id}
      className={classnames("form-select", className)}
      onChange={onChange}
      value={value}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledSelect>
  );
};

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  disabled: false,
};

export default Select;
