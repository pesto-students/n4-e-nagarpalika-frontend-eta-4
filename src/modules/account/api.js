/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const register = async ({
  name,
  email,
  aadharNumber,
  phoneNumber,
  location,
  gender,
  profession,
}) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_API}/api/register`,
    {
      name,
      email,
      aadharNumber,
      phoneNumber,
      location,
      gender,
      profession,
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

export const validateAadhar = async ({ aadharNumber }) => {
  const { data } = await axios.post(
    `${REACT_APP_SERVER_API}/api/users/validateAadhar`,
    {
      aadharNumber,
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
