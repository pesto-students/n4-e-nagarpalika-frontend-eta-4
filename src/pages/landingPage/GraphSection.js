/** @format */

import React from "react";

import Card from "../../common/components/Cards/Card";
import CardBody from "../../common/components/Cards/CardBody";
import Container from "../../common/components/Layout/Container";
import IssueDistributionGraph from "../../common/components/Charts/IssueDistribution";
import IssueStatus from "../../modules/dashboard/components/IssueStatusCard/IssueStatus";

import { H1 } from "./styles";

const GraphSection = () => {
  return (
    <Container className="" style={{ flexDirection: "column" }}>
      <H1 className="text-center text-dark">Progress Tracker</H1>
      <div style={{ margin: "1rem" }} />
      <IssueStatus />
      <H1 className="text-center ">Monthly Grievances Distribution</H1>
      <div style={{ margin: "1rem" }} />

      <Card
        shadow
        className="text-center"
        style={{
          height: "600px",
        }}
      >
        <CardBody className="text-center">
          <IssueDistributionGraph />
        </CardBody>
      </Card>
    </Container>
  );
};

export default GraphSection;
