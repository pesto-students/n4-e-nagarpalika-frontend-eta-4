/** @format */

import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { FETCH_STATUS } from "../../common/contants";
import {
  createIssue,
  resetNewIssue,
} from "../../modules/grievances/actionCreators";
import Grievance from "../../modules/grievances/components/create";

function GrievanceNew({ actionCreateIssue, actionResetNewIssue }) {
  const reduxState = useSelector((state) => state);
  const { issues } = reduxState;
  const { new: newIssue } = issues;

  const history = useHistory();

  const onSubmit = async ({
    title,
    location,
    category,
    description,
    images,
    coords,
  }) => {
    await actionCreateIssue({
      title,
      location,
      category,
      description,
      images,
      coords,
    });
  };

  useEffect(() => {
    if (newIssue.fetchStatus === FETCH_STATUS.success) {
      const newIssueId = newIssue.id;

      actionResetNewIssue();

      history.push(`/grievances/${newIssueId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newIssue]);

  return <Grievance onSubmit={(e) => onSubmit(e)} />;
}

const mapDispatchToProps = {
  actionCreateIssue: createIssue,
  actionResetNewIssue: resetNewIssue,
};

export default connect(null, mapDispatchToProps)(GrievanceNew);
