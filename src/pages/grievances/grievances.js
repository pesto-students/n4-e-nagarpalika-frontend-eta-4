/** @format */

import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { getAllUserIssue } from "../../modules/grievances/actionCreators";
import { FETCH_STATUS } from "../../common/contants";

// import Carousel from "../../common/components/carousel/carousel";
import CardBlock from "../../common/components/carousel/CardBlock";
import Filter from "./filter";

const Grievances = ({ actionGetAllUserIssue }) => {
  const account = useSelector(({ account }) => account);
  const { id: userId } = account;

  useEffect(() => {
    const abortController = new AbortController();
    actionGetAllUserIssue({ userId });
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const issues = useSelector(({ issues }) => issues);

  const list = issues.list.filter((item) => userId === item.userId);
  console.log(list);
  const { status } = issues;

  if (status === FETCH_STATUS.loading || status === FETCH_STATUS.none) {
    return <div>loading...</div>;
  }
  const filterData = (filterProp) => {
    console.log(filterProp);
  };
  if (status === FETCH_STATUS.error) {
    const { error } = issues;

    return (
      <div>
        <h1>error</h1>
        <div>{error}</div>
      </div>
    );
  }
  return (
    <div id="page-top">
      <div className="container-fluid">
        <Filter filterProps={(data) => filterData(data)} />
        {/*<Carousel issues={list} title={"Pending"} />*/}
        <CardBlock issues={list} />
        <a className="scroll-to-top rounded">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  actionGetAllUserIssue: getAllUserIssue,
};

export default connect(null, mapDispatchToProps)(Grievances);
