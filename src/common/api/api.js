/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

// Setting default value for axios
// axios.defaults.withCredentials = true;

export const login = async ({ firebaseToken }) => {
  const { data } = await axios.post(`${REACT_APP_SERVER_API}/api/login`, {
    firebaseToken,
  });

  const { token } = data.data;

  localStorage.setItem("token", token);

  return data;
};

export const logout = async () => {
  const { data } = await axios.post(`${REACT_APP_SERVER_API}/api/logout`);

  return data;
};

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
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return data;
};

export const getAllIssues = async ({ userId }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/login`, {});

  return data;
};

export const getIssue = async ({ userId }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/login`, {});

  return data;
};

export const createIssue = async ({ userId }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/login`, {});

  return data;
};

export const updateIssue = async ({ userId }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/login`, {});

  return data;
};
