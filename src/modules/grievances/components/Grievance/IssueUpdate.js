/** @format */

/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import classnames from "classnames";

import { GRIEVANCE_STATUS } from "../../../../common/contants";

import Select from "../../../../common/components/Form/Select";
import Option from "../../../../common/components/Form/Option";

import * as actions from "../../actionCreators";
import { updateIssue as apiUpdateIssue } from "../../api";

const IssueUpdate = ({ issueId, status, actionUpdateIssue }) => {
  const onChange = async (e) => {
    // eslint-disable-next-line no-unused-vars
    const { status, message, data } = await apiUpdateIssue({
      issueId,
      status: e.target.value,
    });

    if (status === "Success") {
      const { issue } = data;

      actionUpdateIssue({ issueId, issue });
    }
  };

  return (
    <Select
      value={status}
      onChange={onChange}
      className=""
      style={{ width: "145px" }}
    >
      {/* <Option value="">Select Status</Option> */}
      <Option value={GRIEVANCE_STATUS.none}>Created</Option>
      <Option value={GRIEVANCE_STATUS.review}>In Review</Option>
      <Option value={GRIEVANCE_STATUS.action}>Action Taken</Option>
      <Option value={GRIEVANCE_STATUS.resolved}>Resolved</Option>
    </Select>
  );
};

const mapDispatchToProps = {
  actionUpdateIssue: actions.updateIssue,
};

export default connect(null, mapDispatchToProps)(IssueUpdate);
