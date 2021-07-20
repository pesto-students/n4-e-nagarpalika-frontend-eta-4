/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const login = async ({ firebaseToken }) => {
  const { data } = await axios.post(`${REACT_APP_SERVER_API}/api/login`, {
    firebaseToken,
  });

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
  const { data } = await axios.post(`${REACT_APP_SERVER_API}/api/login`, {
    name,
    email,
    aadhar,
    avatar,
    city,
    gender,
  });

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
