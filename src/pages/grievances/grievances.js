/** @format */
/* eslint-disable no-unused-vars */

import React from "react";

import GrievancesComponent from "../../modules/grievances/components/Grievances/Grievances";

const Grievances = () => {
  return (
    // <div id="page-top">
    // <div className="container-fluid">
    <GrievancesComponent {...{ totalIssues: 200 }} />
    // </div>
    // </div>
  );
};

export default Grievances;
