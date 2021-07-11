/** @format */

import React from "react";

import { Container } from "./styles";

const Settings = () => (
  <Container className="container d-flex flex-column justify-content-center align-items-center">
    <button
      type="button"
      className="btn btn-light align-self-center shadow rounded"
    >
      Language
    </button>
    <button
      type="button"
      className="btn btn-light align-self-center shadow rounded"
    >
      Feedback
    </button>
    <button
      type="button"
      className="btn btn-light align-self-center shadow rounded"
    >
      Privacy Policy
    </button>
    <button
      type="button"
      className="btn btn-light align-self-center shadow rounded"
    >
      Tell a Friend
    </button>
  </Container>
);

export default Settings;
