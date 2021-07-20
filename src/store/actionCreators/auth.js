/** @format */

import {
  LOG_IN_START,
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
  LOG_OUT_START,
  LOG_OUT_ERROR,
  LOG_OUT_SUCCESS,
} from "../constants/actionTypes";

import { login as apiLogin } from "../../api/api";

export function logIn({ firebaseToken }) {
  return async (dispatch) => {
    dispatch({ type: LOG_IN_START });

    try {
      const { status, data, message } = await apiLogin({ firebaseToken });

      if (status === "Success") {
        const { user } = data;

        dispatch({ type: LOG_IN_SUCCESS, payload: user });
      } else {
        dispatch({ type: LOG_IN_ERROR, payload: message });
      }
    } catch (error) {
      dispatch({ type: LOG_IN_ERROR, payload: error });
    }
  };
}

export function logOut() {
  return async (dispatch) => {
    dispatch({ type: LOG_OUT_START });

    try {
      await apiLogin();

      dispatch({ type: LOG_OUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOG_OUT_ERROR });
    }
  };
}
