/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

// import Input from "./Input";

const StyledInput = styled.input`
  border-radius: 12px;
  height: 55px;
`;

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
    <StyledInput
      type="text"
      maxLength="10"
      required
      className={classnames(
        "form-control mb-3",
        {
          "is-invalid": isInvalid,
          "is-valid": isValid,
        }
        // className
      )}
      id="phoneNumber"
      placeholder="Phone number"
      value={phoneNumber}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

PhoneNumberInput.propTypes = {
  initialValue: PropTypes.string.isRequired,
  setNumber: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PhoneNumberInput;
