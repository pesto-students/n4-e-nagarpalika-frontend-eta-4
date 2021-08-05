/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledCheck = styled.div``;

const Check = ({ id, label, value, onChange, disabled, className, style }) => {
  return (
    <StyledCheck
      className={classnames("form-check m-2 p-2 mx-3", className)}
      style={style}
    >
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </StyledCheck>
  );
};

Check.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.bool.isRequired,
};

Check.defaultProps = {
  className: "",
  disabled: false,
  style: {},
};

export default Check;
