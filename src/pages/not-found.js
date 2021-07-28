/** @format */

import React from "react";
import styled from "styled-components";
const Div = styled.div`
  & {
    color: #5a5c69;
    font-size: 7rem;
    position: relative;
    line-height: 1;
    width: 12.5rem;
  }
  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 #4e73df;
    top: 0;
    color: #5a5c69;
    background: #f8f9fc;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 #e74a3b;
    top: 0;
    color: #5a5c69;
    background: #f8f9fc;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }
`;

const NotFound = () => (
  <div className="container-fluid">
    <div className="text-center">
      <Div className="mx-auto" data-text="404">
        404
      </Div>
      <p className="lead text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <a href="/login">&larr; Back to Login</a>
    </div>
  </div>
);

export default NotFound;
