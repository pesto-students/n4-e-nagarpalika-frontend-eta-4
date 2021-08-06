/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledOption = styled.option``;

const Option = ({ children, value }) => {
  return (
    <StyledOption className={classnames("py-2 my-2")} value={value}>
      {children}
    </StyledOption>
  );
};

Option.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
