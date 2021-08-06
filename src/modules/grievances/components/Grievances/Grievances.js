/** @format */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
// import dateFnsFormat from "date-fns/format";

import {
  GRIEVANCE_CATEGORIES,
  GRIEVANCE_STATUS,
  LOCATIONS,
  // FETCH_STATUS,
  ACCOUNT_TYPE,
} from "../../../../common/contants";

import { getAllUserIssue } from "../../actionCreators";

import { Heading } from "../../../../common/components/Typography/Typography";
import Card from "../../../../common/components/Cards/Card";
import CardBody from "../../../../common/components/Cards/CardBody";
import CardHeader from "../../../../common/components/Cards/CardHeader";
import Col from "../../../../common/components/Layout/Col";
import Container from "../../../../common/components/Layout/Container";
import GrievanceGrid from "../GrievanceGrid/GrievanceGrid";
import GrievanceList from "../GrievanceList/GrievanceList";
import Option from "../../../../common/components/Form/Option";
import Row from "../../../../common/components/Layout/Row";
import Select from "../../../../common/components/Form/Select";

const GrievancesComponent = ({ actionGetAllUserIssue, totalIssues = 100 }) => {
  const account = useSelector(({ account }) => account);
  const { id: userId, accountType, location: userLocation } = account;

  const [radioInput, setRadioInput] = useState(true);
  const [sortBy, setSortBy] = useState("createdAt");
  const [location, setLocation] = useState(userLocation);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let params = {
      userId,
      sortBy,
    };

    if (accountType === ACCOUNT_TYPE.user) {
      params = { ...params, accountType };
    }
    if (location.length > 0) {
      params = { ...params, location };
    }
    if (category.length > 0) {
      params = { ...params, category };
    }
    if (status.length > 0) {
      params = { ...params, status };
    }

    console.log(params);

    actionGetAllUserIssue(params);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, location, category, status]);

  const issues = useSelector(({ issues }) => issues);

  const arr =
    accountType === ACCOUNT_TYPE.user
      ? issues.list.filter((item) => userId === item.userId)
      : issues.list;

  const list = (arr.length > 50 ? arr.slice(0, 50) : arr)
    .sort((issue1, issue2) => {
      const time1 = new Date(issue1.createdAt).getTime();
      const time2 = new Date(issue2.createdAt).getTime();

      return sortBy === "createdAt" ? time2 - time1 : time1 - time2;
    })
    .filter((item) => {
      if (location.length > 0) {
        return item.location === location;
      }

      return true;
    })
    .filter((item) => {
      if (category.length > 0) {
        return item.category === category;
      }
      return true;
    })
    .filter((item) => {
      if (status.length > 0) {
        return item.status === status;
      }
      return true;
    });

  // const { fetchStatus } = issues;

  // const isLoading =
  //   fetchStatus === FETCH_STATUS.loading || fetchStatus === FETCH_STATUS.none;
  // const isError = fetchStatus === FETCH_STATUS.error;

  return (
    <Container className={"flex-column"}>
      <Row
        className="my-3"
        style={{
          disply: "flex",
          justifyContent: "space-between",
        }}
      >
        <Col
          size={4}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Heading>
            Displaying {list.length} out of {totalIssues} grievances
          </Heading>
        </Col>
        <Col
          size={3}
          sm={4}
          md={4}
          lg={3}
          xl={3}
          xxl={3}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              checked={radioInput}
              onChange={() => setRadioInput(true)}
            />

            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              <i className="bi bi-grid"></i>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              checked={!radioInput}
              onChange={() => setRadioInput(false)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              <i className="bi bi-list-ul"></i>
            </label>
          </div>
          <Select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="m-1 p-2"
            style={{ width: "150px" }}
          >
            <Option value="">Sort by</Option>
            <Option value={"createdAt"}>Newest</Option>
            <Option value={"createdAtDesc"}>Oldest</Option>
            {/* <Option value={"title"}>Alphabatic</Option> */}
          </Select>
        </Col>
      </Row>
      <Row>
        <Col size={3} sm={4} md={4} lg={3} xl={3} xxl={3}>
          <Card>
            <CardHeader>
              <Heading>Filter</Heading>
            </CardHeader>
            <CardBody>
              <p className="fw-bolder text-secondary text-uppercase">
                Category
              </p>
              {["", ...Object.values(GRIEVANCE_CATEGORIES)].map((c) => {
                return (
                  <div className="form-check" key={c}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioCategory"
                      id="radioCategoryId"
                      checked={category === c}
                      onChange={() => setCategory(c)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioCategoryId"
                    >
                      {c.length === 0 ? "Reset" : c}
                    </label>
                  </div>
                );
              })}
            </CardBody>
            <hr style={{ margin: 0 }} />
            <CardBody>
              <p className="fw-bolder text-secondary text-uppercase">Status</p>
              {["", ...Object.values(GRIEVANCE_STATUS)].map((gStatus) => {
                return (
                  <div className="form-check" key={gStatus}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioStatus"
                      id="radioStatusId"
                      checked={status === gStatus}
                      onChange={() => setStatus(gStatus)}
                    />
                    <label className="form-check-label" htmlFor="radioStatusId">
                      {gStatus.length === 0 ? "Reset" : null}
                      {gStatus === GRIEVANCE_STATUS.none ? "Created" : null}
                      {gStatus === GRIEVANCE_STATUS.review ? "Reviewed" : null}
                      {gStatus === GRIEVANCE_STATUS.action
                        ? "Action Taken"
                        : null}
                      {gStatus === GRIEVANCE_STATUS.resolved
                        ? "Resolved"
                        : null}
                    </label>
                  </div>
                );
              })}
            </CardBody>
            <hr style={{ margin: 0 }} />
            <CardBody>
              <p className="fw-bolder text-secondary text-uppercase">
                Location
              </p>
              {["", ...Object.values(LOCATIONS)].map((l) => {
                return (
                  <div className="form-check" key={l}>
                    <input
                      className="form-check-input"
                      id="radioLocationId"
                      name="radioLocation"
                      type="radio"
                      checked={l === location}
                      onChange={() => setLocation(l)}
                      disabled={accountType === ACCOUNT_TYPE.user}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioLocationId"
                    >
                      {l.length === 0
                        ? "Reset"
                        : `${l[0]}${l.slice(1).toLowerCase()}`}
                    </label>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </Col>
        <Col size={9} sm={8} md={8} lg={9} xl={9} xxl={9}>
          <Row>
            {radioInput ? (
              <GrievanceGrid {...{ accountType, issues: list }} />
            ) : (
              <GrievanceList {...{ accountType, issues: list }} />
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = {
  actionGetAllUserIssue: getAllUserIssue,
};

export default connect(null, mapDispatchToProps)(GrievancesComponent);
