/** @format */

import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { getAllUserIssue } from "../../modules/grievances/actionCreators";
import { FETCH_STATUS } from "../../common/contants";

import Carousel from "../../common/components/carousel/carousel";
// import CardBlock from "../../common/components/carousel/CardBlock";

const Grievances = ({ actionGetAllUserIssue }) => {
  const account = useSelector(({ account }) => account);
  const { id: userId } = account;

  useEffect(() => {
    actionGetAllUserIssue({ userId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const issues = useSelector(({ issues }) => issues);

  const list = issues.list.filter((item) => userId === item.userId);
  console.log(list);
  const { status } = issues;

  if (status === FETCH_STATUS.loading || status === FETCH_STATUS.none) {
    return <div>loading...</div>;
  }

  if (status === FETCH_STATUS.error) {
    const { error } = issues;

    return (
      <div>
        <h1>error</h1>
        <div>{error}</div>
      </div>
    );
  }
  return <Carousel issues={list} title={"Pending"} />;
  // return list.map(({ id, title, description, images, location, category }) => (
  //   CardBlock
  // ));
  //   return <CardBlock issues={list} />
};

const mapDispatchToProps = {
  actionGetAllUserIssue: getAllUserIssue,
};

export default connect(null, mapDispatchToProps)(Grievances);
