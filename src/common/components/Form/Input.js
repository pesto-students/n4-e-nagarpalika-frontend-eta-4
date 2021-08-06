/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const InputContainer = styled.div`
  /* margin-top: 4px;
  margin-bottom: 4px; */
`;

const StyledInput = styled.input`
  /* margin: 4px 0; */
  border-radius: 12px;
`;

const Input = ({
  className,
  disabled,
  id,
  inputType,
  isValid,
  isInvalid,
  onChange,
  placeholder,
  value,
  label,
  ...rest
}) => {
  return (
    <InputContainer className="form-floating">
      <StyledInput
        className={classnames(
          "form-control",
          {
            "is-invalid": isInvalid,
            "is-valid": isValid,
          },
          className
        )}
        disabled={disabled}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
        value={value}
        {...rest}
      />
      {placeholder.length > 0 && (
        <label htmlFor={id} style={{ left: "10px" }}>
          {placeholder}
        </label>
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(["text", "email"]),
  isValid: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  disabled: false,
  inputType: "text",
  isValid: false,
  isInvalid: false,
  label: "",
  placeholder: "",
  className: "",
};

export default Input;
