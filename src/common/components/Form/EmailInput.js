/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import isEmail from "validator/es/lib/isEmail";

import Input from "./Input";

function EmailInput({ initialValue, setEmail, disabled }) {
  const [value, setValue] = useState(initialValue || "");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;

    if (isEmail(value)) {
      setIsValid(true);
      setIsInvalid(false);
    } else {
      setIsValid(false);
      setIsInvalid(true);
    }

    setValue(value);
    setEmail(value);
  };

  return (
    <Input
      className="mb-3"
      disabled={disabled}
      id="emailInput"
      isInvalid={isInvalid}
      isValid={isValid}
      maxLength="30"
      onChange={onChange}
      placeholder="Enter your Email"
      required
      type="email"
      value={value}
    />
  );
}

EmailInput.propTypes = {
  initialValue: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default EmailInput;
