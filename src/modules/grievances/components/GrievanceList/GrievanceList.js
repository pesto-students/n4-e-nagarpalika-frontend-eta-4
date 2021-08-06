/** @format */

import React from "react";

import GrievanceListCard from "../GrievanceCard/ListCard";

const GrievanceList = ({ issues, accountType }) =>
  issues.map((issue) => (
    <GrievanceListCard key={issue.id} {...{ ...issue, accountType }} />
  ));

export default GrievanceList;
