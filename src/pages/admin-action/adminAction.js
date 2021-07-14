/** @format */
/** @format */

import React, { useState } from "react";
import { Container, Admin, CreateIssue, ToggleHead } from "./styles";
import "./toggleChange.css";
import CreateIssueTypes from "./createTssueTypes";
import CreateAdmin from "./createAdmin";

const AdminActions = () => {
  const [actionMode, setActionMode] = useState(true);
  const onToggle = (e) => {
    e.preventDefault();
    setActionMode(!actionMode);
    console.log(actionMode);
  };
  return (
    <Container>
      <ToggleHead>
        <Admin
          className={actionMode ? "actionModeTrue" : "actionModeFalse"}
          onClick={onToggle}
        >
          Create Admin
        </Admin>
        <CreateIssue
          className={!actionMode ? "actionModeTrue" : "actionModeFalse"}
          onClick={onToggle}
        >
          Create Issue Types
        </CreateIssue>
      </ToggleHead>
      {actionMode ? <CreateAdmin /> : <CreateIssueTypes />}
    </Container>
  );
};

export default AdminActions;
