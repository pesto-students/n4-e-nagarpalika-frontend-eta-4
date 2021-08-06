/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import { validateAadhar as apiValidateAadhar } from "../../../modules/account/api";

function AadharInput({ initialValue, setNumber, disabled }) {
  const [value, setValue] = useState(initialValue || "");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const onChange = async (e) => {
    const value = e.target.value;

    if (new RegExp("[^0-9]").test(value)) {
      setIsValid(false);
      setIsInvalid(true);
      return;
    }

    setValue(value);
    setNumber(value);
    setIsValid(true);
    setIsInvalid(false);

    if (value.length === 16) {
      // eslint-disable-next-line no-unused-vars
      const { status, message, data } = await apiValidateAadhar({
        aadharNumber: value,
      });

      if (status === "Success") {
        // eslint-disable-next-line no-unused-vars
        const { exists } = data;

        setIsInvalid(exists);
        setIsValid(!exists);
      } else if (status === "Error") {
        //
      }
    }
  };

  return (
    <Input
      className="mb-3"
      disabled={disabled}
      id="aadharNumberInput"
      isInvalid={isInvalid}
      isValid={isValid}
      maxLength="16"
      onChange={onChange}
      placeholder="Enter the 16 digit Aadhar Number"
      type="text"
      value={value}
    />
  );
}

AadharInput.propTypes = {
  initialValue: PropTypes.string,
  setNumber: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default AadharInput;
