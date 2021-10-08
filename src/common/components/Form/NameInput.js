/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./Input";

function NameInput({ initialValue, setName, disabled }) {
  const [value, setValue] = useState(initialValue || "");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;

    if (new RegExp("[^a-zA-Z ]").test(value)) {
      setIsValid(false);
      setIsInvalid(true);
      return;
    }

    setIsValid(true);
    setIsInvalid(false);
    setValue(value);
    setName(value);
  };

  return (
    <Input
      className="mb-3"
      disabled={disabled}
      id="nameInput"
      isInvalid={isInvalid}
      isValid={isValid}
      minLength="4"
      maxLength="25"
      onChange={onChange}
      placeholder="Enter your name"
      required
      type="text"
      value={value}
    />
  );
}

NameInput.propTypes = {
  setName: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default NameInput;
