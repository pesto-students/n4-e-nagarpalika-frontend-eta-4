/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./Input";

function PhoneNumberInput({ initialValue, setNumber, disabled }) {
  const [phoneNumber, setPhoneNumber] = useState(initialValue || "");
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
    setPhoneNumber(value);
    setNumber(value);
  };

  return (
    <Input
      type="tel"
      maxLength="10"
      required
      className="mb-3"
      id="phoneNumber"
      placeholder="Phone number"
      value={phoneNumber}
      onChange={onChange}
      disabled={disabled}
      isValid={isValid}
      isInvalid={isInvalid}
    />
  );
}

PhoneNumberInput.propTypes = {
  initialValue: PropTypes.string.isRequired,
  setNumber: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PhoneNumberInput;
