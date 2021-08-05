/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  resize: none;
  border-radius: 12px;
`;

const Textarea = ({
  value,
  onChange,
  placeholder,
  id,
  disabled,
  rows,
  className,
  style,
}) => {
  return (
    <StyledTextarea
      className={classnames("form-control", className)}
      disabled={disabled}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      value={value}
      style={style}
    />
  );
};

Textarea.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  disabled: false,
  rows: 3,
};

export default Textarea;
