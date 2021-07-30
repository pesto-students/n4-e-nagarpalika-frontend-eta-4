/** @format */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import dateFnsFormat from "date-fns/format";

import { getAllUserIssue } from "../../modules/grievances/actionCreators";
import { FETCH_STATUS } from "../../common/contants";

// import Carousel from "../../common/components/carousel/carousel";
import CardBlock from "../../common/components/carousel/CardBlock";
import Filter from "./filter";
import Loader from "../../common/components/Loaders/loader";

const Grievances = ({ actionGetAllUserIssue }) => {
  const account = useSelector(({ account }) => account);
  const { id: userId, accountType } = account;

  const [dateRangeStart, setDateRangeStart] = useState(
    dateFnsFormat(new Date("2000"), "yyyy-MM-dd")
  );
  const [dateRangeEnd, setDateRangeEnd] = useState(
    dateFnsFormat(new Date(), "yyyy-MM-dd")
  );
  const [sortBy, setSortBy] = useState("createdAt");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let params = {
      userId,
      dateRangeStart,
      dateRangeEnd,
      sortBy,
    };

    if (location.length > 0) {
      const city = location[0].label
      params = { ...params, location: city };
    }
    if (category.length > 0) {
      params = { ...params, category };
    }
    if (status.length > 0) {
      params = { ...params, status };
    }

    actionGetAllUserIssue(params);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, location, category, status, dateRangeStart, dateRangeEnd]);

  const issues = useSelector(({ issues }) => issues);

  const list = issues.list.filter((item) => userId === item.userId);

  const { fetchStatus } = issues;

  const isLoading =
    fetchStatus === FETCH_STATUS.loading || fetchStatus === FETCH_STATUS.none;
  const isError = fetchStatus === FETCH_STATUS.error;

  return (
    <div id="page-top">
      <div className="container-fluid">
        <Filter
          {...{
            dateRangeStart,
            setDateRangeStart,
            dateRangeEnd,
            setDateRangeEnd,
            sortBy,
            setSortBy,
            location,
            setLocation,
            category,
            setCategory,
            status,
            setStatus,
          }}
        />
        {isLoading ? <div><Loader/></div> : null}
        {isError ? (
          <div>
            <h1>error</h1>
            <div>{issues.error}</div>
          </div>
        ) : null}
        <CardBlock
          {...{
            accountType,
            category,
            dateRangeEnd,
            dateRangeStart,
            issues: list,
            location,
            sortBy,
            status,
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  actionGetAllUserIssue: getAllUserIssue,
};

export default connect(null, mapDispatchToProps)(Grievances);
