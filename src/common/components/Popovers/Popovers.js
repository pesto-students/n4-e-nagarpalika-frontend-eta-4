/** @format */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const StyledButton = styled.button``;

const Popovers = ({ children, title, content, className }) => {
  return (
    <StyledButton
      type="button"
      className={classnames("btn btn-lg btn-danger", className)}
      data-bs-toggle="popover"
      title={title}
      data-bs-content={content}
    >
      {children}
    </StyledButton>
  );
};

Popovers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Popovers;
