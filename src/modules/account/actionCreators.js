/** @format */

import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  USER_UPDATE_START,
  USER_UPDATE_ERROR,
  USER_UPDATE_SUCCESS,
} from "../../store/constants/actionTypes";

import { register as apiRegister, update as apiUpdate } from "./api";

export function register({
  name,
  email,
  aadharNumber,
  phoneNumber,
  location,
  gender,
  profession,
}) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_START });

    try {
      const { status, data, message } = await apiRegister({
        name,
        email,
        aadharNumber,
        phoneNumber,
        location,
        gender,
        profession,
      });

      if (status === "Success") {
        const { user } = data;

        dispatch({ type: REGISTER_SUCCESS, payload: user });
      } else {
        dispatch({ type: REGISTER_ERROR, payload: message });
      }
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    }
  };
}

export function update({ name, location, gender, profession }) {
  return async (dispatch) => {
    dispatch({ type: USER_UPDATE_START });

    try {
      const { status, data, message } = await apiUpdate({
        name,
        location,
        gender,
        profession,
      });

      if (status === "Success") {
        const { user } = data;

        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: { user },
        });
      } else {
        dispatch({
          type: USER_UPDATE_ERROR,
          payload: { error: message },
        });
      }
    } catch (error) {
      dispatch({
        type: USER_UPDATE_ERROR,
        payload: { error },
      });
    }
  };
}
