/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const getIssueStats = async (params) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/issues/stats`, {
    params,
  });

  return data;
};
