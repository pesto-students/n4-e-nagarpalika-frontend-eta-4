/** @format */

import React from "react";
import PropTypes from "prop-types";

import GrievanceCard from "../GrievanceCard/GridCard";
import Col from "../../../../common/components/Layout/Col";

const GrievanceGrid = ({ accountType, issues }) =>
  issues.map((issue) => (
    <Col
      size={12}
      sm={12}
      md={12}
      lg={6}
      xl={4}
      xxl={4}
      key={issue.id}
      className="mb-3"
    >
      <GrievanceCard {...{ ...issue, accountType }} />
    </Col>
  ));

GrievanceGrid.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.object),
};

GrievanceGrid.defaultProps = {
  issues: [],
};

export default GrievanceGrid;
