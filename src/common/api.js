/** @format */

import axios from "axios";

const { REACT_APP_SERVER_API } = process.env;

export const contactUs = async ({ email, title, description }) => {
  const { data } = await axios.post(
    `${REACT_APP_SERVER_API}/api/contact-us`,
    {
      email,
      title,
      description,
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
