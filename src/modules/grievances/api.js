/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const getAllAdminIssues = async () => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/admin/issues`, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return data;
};

export const getAllUserIssues = async ({ userId }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/users/${userId}/issues`,
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

export const getIssue = async ({ id }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/issues/${id}`);

  return data;
};

export const createIssue = async ({
  title,
  description,
  location,
  category,
  images,
}) => {
  const { data } = await axios.post(
    `${REACT_APP_SERVER_API}/api/issues`,
    {
      title,
      description,
      location,
      category,
      images,
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

export const updateIssue = async ({
  userId,
  title,
  description,
  location,
  category,
  images,
}) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_API}/api/users/${userId}/issues`,
    {
      title,
      description,
      location,
      category,
      images,
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

export const createIssueType = async ({ title, location }) => {
  const { data } = await axios.post(
    `${REACT_APP_SERVER_API}/api/admin/issues/issueTypes`,
    {
      title,
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

  return data;
};
