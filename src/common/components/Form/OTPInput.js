/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./Input";

function OTPInput({ setNumber, disabled }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;

    if (new RegExp("[^0-9]").test(value)) {
      setIsValid(false);
      setIsInvalid(true);
      return;
    }
    setIsValid(true);
    setIsInvalid(false);
    setValue(value);
    setNumber(value);
  };

  return (
    <Input
      className="mb-3"
      disabled={disabled}
      id="otpVerification"
      isInvalid={isInvalid}
      isValid={isValid}
      maxLength="6"
      onChange={onChange}
      placeholder="Verify OTP"
      required
      type="text"
      value={value}
    />
  );
}

OTPInput.propTypes = {
  setNumber: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default OTPInput;
