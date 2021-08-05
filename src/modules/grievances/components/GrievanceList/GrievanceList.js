/** @format */

import React from "react";

import GrievanceListCard from "../GrievanceCard/ListCard";

const GrievanceList = ({ issues, accountType }) =>
  issues.map((issue) => <GrievanceListCard {...{ ...issue, accountType }} />);

export default GrievanceList;
