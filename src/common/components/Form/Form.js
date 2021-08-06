/** @format */

import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const StyledForm = styled.form``;

const Form = ({ children, className, style }) => {
  return (
    <StyledForm className={classnames(className)} style={style}>
      {children}
    </StyledForm>
  );
};

Form.propTypes = {};

export default Form;
