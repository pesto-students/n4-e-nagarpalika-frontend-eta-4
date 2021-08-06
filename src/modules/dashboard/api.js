/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const getIssueStats = async ({ userId, location }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/issues/stats`, {
    params: {
      userId,
      location,
    },
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return data;
};

export const getCityHappinessLevel = async ({ location }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/dashboard/happiness-level`,
    {
      params: {
        location,
      },
    }
  );

  return data;
};

export const getIssuesGraphByDate = async ({ userId, location }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/issues/graphs/byDate`,
    {
      params: {
        userId,
        location,
      },
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return data;
};
