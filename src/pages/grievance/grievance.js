/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect, useSelector } from "react-redux";

import Loader from "../../common/components/Loaders/loader";
import { getIssue } from "../../modules/grievances/actionCreators";
import { FETCH_STATUS } from "../../common/contants";
// import ViewGrievance from "./viewGrievance";
import ViewGrievance from "./viewGrievanceNew";

const Grievance = ({ actionGetIssue }) => {
  const { id } = useParams();

  useEffect(() => {
    actionGetIssue({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const list = useSelector(({ issues }) => issues.list);

  const index = list.findIndex((item) => id === item.id);

  if (index < 0) {
    return <div>not found</div>;
  }

  const issue = list[index];

  const { fetchStatus } = issue;

  if (fetchStatus === FETCH_STATUS.none) {
    return <div>none</div>;
  }

  if (fetchStatus === FETCH_STATUS.loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (fetchStatus === FETCH_STATUS.error) {
    const { error } = issue;

    return (
      <div>
        <h1>error</h1>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div>
      <ViewGrievance data={issue} />
    </div>
  );
};

const mapDispatchToProps = {
  actionGetIssue: getIssue,
};

export default connect(null, mapDispatchToProps)(Grievance);
