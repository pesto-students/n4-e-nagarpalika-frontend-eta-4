/** @format */

import React from "react";
import PropTypes from "prop-types";

import Card from "../../../../common/components/Cards/Card";
import CardHeader from "../../../../common/components/Cards/CardHeader";
import CardBody from "../../../../common/components/Cards/CardBody";
import { Heading } from "../../../../common/components/Typography/Typography";
import IssueDistributionGraph from "../../../../common/components/Charts/IssueDistribution";

const MonthlyOverview = ({ userId, location }) => {
  return (
    <Card shadow className="card text-center" style={{ height: "400px" }}>
      <CardHeader className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <Heading size={6} className="m-0 font-weight-bold text-dark">
          Monthly overview
        </Heading>
      </CardHeader>
      <CardBody className="">
        <IssueDistributionGraph {...{ userId, location }} />
      </CardBody>
    </Card>
  );
};

MonthlyOverview.propTypes = {
  userId: PropTypes.string,
  location: PropTypes.string,
};

// MonthlyOverview.defaultProps = {
// };

export default MonthlyOverview;
