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

export const getIssuesCount = async ({ userId, location }) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_API}/api/issues/count`, {
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

export const getAllUserIssues = async ({
  userId,
  accountType,
  sortBy,
  location,
  category,
  status,
}) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/users/${userId}/issues`,
    {
      params: {
        sortBy,
        accountType,
        location,
        category,
        status,
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
  coordinates,
}) => {
  const { data } = await axios.post(
    `${REACT_APP_SERVER_API}/api/issues`,
    {
      title,
      description,
      location,
      category,
      images,
      coordinates,
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
  issueId,
  title,
  description,
  category,
  images,
  status,
}) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_API}/api/issues/${issueId}`,
    {
      title,
      description,
      category,
      images,
      status,
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

export const createComment = async ({ userId, issueId, title }) => {
  const { data } = await axios.post(
    `${REACT_APP_SERVER_API}/api/users/${userId}/issues/${issueId}/comments`,
    {
      title,
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

export const getComments = async ({ issueId }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/issues/${issueId}/comments`,
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

export const getCommentsCount = async ({ issueId }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/issues/${issueId}/commentsCount`,
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

// export const deleteComments = async ({ issueId, commentId }) => {
//   const { data } = await axios.delete(
//     `${REACT_APP_SERVER_API}/api/issues/${issueId}/comments/${commentId}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//         accept: "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     }
//   );

//   return data;
// };

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
