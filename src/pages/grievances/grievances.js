/** @format */

/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ACCOUNT_TYPE } from "../../common/contants";

import GrievancesComponent from "../../modules/grievances/components/Grievances/Grievances";

import { getIssuesCount } from "../../modules/grievances/api";

const Grievances = () => {
  const account = useSelector(({ account }) => account);
  const { id: userId, accountType, location } = account;

  const [totalIssues, setTotalIssues] = useState(0);

  useEffect(() => {
    let params = {};

    if (accountType === ACCOUNT_TYPE.user) {
      params = { ...params, userId, location };
    }

    async function get() {
      const { status, message, data } = await getIssuesCount(params);

      if (status === "Success") {
        const { count } = data;
        setTotalIssues(count);
      }
    }

    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <GrievancesComponent {...{ totalIssues }} />;
};

export default Grievances;
