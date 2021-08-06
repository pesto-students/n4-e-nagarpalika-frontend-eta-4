/** @format */

import axios from "axios";

import firebase from "../../common/firebase";

const auth = firebase.auth();

const { REACT_APP_SERVER_API } = process.env;

export const login = async ({ firebaseToken }) => {
  const { data } = await axios.post(`${REACT_APP_SERVER_API}/api/login`, {
    firebaseToken,
  });

  return data;
};

export const logout = async () => {
  await auth.signOut();

  localStorage.removeItem("token");
};
