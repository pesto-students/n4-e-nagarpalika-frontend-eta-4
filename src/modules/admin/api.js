/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const createAdmin = async ({ phoneNumber, accountType, location }) => {
  const { data, status } = await axios.put(
    `${REACT_APP_SERVER_API}/api/admin/users`,
    {
      phoneNumber,
      accountType,
      location,
    },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return [data, status];
};
