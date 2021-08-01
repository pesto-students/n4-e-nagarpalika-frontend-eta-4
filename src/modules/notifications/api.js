/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const getNotificationCount = async ({ userId }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/${userId}/notificationCount`,
    {
      userId,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return data;
};

export const getNotifications = async ({ userId, page = 0, limit = 25 }) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_API}/api/${userId}/notifications`,
    {
      userId,
      params: {
        page,
        limit,
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

export const updateNotification = async ({ notificationId }) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_API}/api/notifications/${notificationId}`,
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
