/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect, useSelector } from "react-redux";

import { getIssue } from "../../modules/grievances/actionCreators";
import { FETCH_STATUS } from "../../common/contants";
import ViewGrievance from "./viewGrievance";

const Grievance = ({ actionGetIssue }) => {
  const { id } = useParams();

  useEffect(() => {
    actionGetIssue({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const list = useSelector(({ issues }) => issues.list);

  // console.log(list);
  const index = list.findIndex((item) => id === item.id);

  if (index < 0) {
    return <div>not found</div>;
  }

  const issue = list[index];

  const { status } = issue;

  if (status === FETCH_STATUS.none) {
    return <div>none</div>;
  }

  if (status === FETCH_STATUS.loading) {
    return <div>loading...</div>;
  }

  if (status === FETCH_STATUS.error) {
    const { error } = issue;
    return (
      <div>
        <h1>error</h1>
        <div>{error}</div>
      </div>
    );
  }
  console.log(list);
  // eslint-disable-next-line no-unused-vars
  // const { title, description, images, location, category } = issue;

  return (
    <div>
      <ViewGrievance grievanceData={issue} />
    </div>
  );
};

const mapDispatchToProps = {
  actionGetIssue: getIssue,
};

export default connect(null, mapDispatchToProps)(Grievance);
