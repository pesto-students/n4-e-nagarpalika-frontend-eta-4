/** @format */

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ACCOUNT_TYPE } from "../../common/contants";
import { LOCATIONS } from "../../common/contants";

import IssueStatus from "../../modules/dashboard/components/IssueStatusCard/IssueStatus";
import CityHappinessLevel from "../../modules/dashboard/components/CityHappinessLevel";

import { Heading } from "../../common/components/Typography/Typography";
import Col from "../../common/components/Layout/Col";
import Row from "../../common/components/Layout/Row";

import { Container, Flex } from "./styles";
import MonthlyOverview from "../../modules/dashboard/components/MonthlyOverview/MonthlyOverview";
import CategoryOverview from "../../modules/dashboard/components/CategoryOverview/CategoryOverview";

function Dashboard() {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { id: userId, accountType, location: userLocation } = account;

  const [location, setLocation] = useState(userLocation);
  // const history = useHistory();

  return (
    <Container className="container-fluid" style={{ marginTop: "20px" }}>
      <Flex className="d-flex align-items-center justify-content-between mb-4">
        <Heading size={3} className="mb-0 text-gray-800">
          Dashboard
        </Heading>
        <div style={{ margin: "1rem" }} />
        <div className="d-sm-inline-block">
          <select
            className="form-select"
            id="locationInput"
            aria-label="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={accountType !== ACCOUNT_TYPE.admin}
          >
            <option value="">Select Location</option>
            <option value={LOCATIONS.bangaluru}>Bangaluru</option>
            <option value={LOCATIONS.delhi}>Delhi</option>
            <option value={LOCATIONS.mumbai}>Mumbai</option>
          </select>
        </div>
      </Flex>
      <Row className="">
        <IssueStatus
          {...{
            location: location,
            userId: accountType === ACCOUNT_TYPE.user ? userId : null,
          }}
        />
        <Row className="">
          <Col size={6} className="mb-4">
            <CityHappinessLevel location={userLocation} />
          </Col>
          <Col size={6} className="mb-4">
            <MonthlyOverview {...{ userId, location }} />
          </Col>
        </Row>
        <Row>
          <Col size={12} className="mb-4">
            <CategoryOverview />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Dashboard;
