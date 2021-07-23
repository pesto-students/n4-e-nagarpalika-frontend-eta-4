/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const register = async ({
  name,
  email,
  aadhar,
  avatar,
  city,
  gender,
}) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_API}/api/register`,
    {
      name,
      email,
      aadhar,
      avatar,
      city,
      gender,
    },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return data;
};

export const update = async ({ id, name, profession, location, email }) => {
  const { data } = await axios.put(`${REACT_APP_SERVER_API}/api/users/${id}`, {
    name,
    profession,
    location,
    email,
  });

  return data;
};
