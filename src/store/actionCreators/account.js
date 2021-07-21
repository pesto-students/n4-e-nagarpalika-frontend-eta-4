/** @format */

import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../constants/actionTypes";

import { register as apiRegister } from "../../common/api/api";

export function register({
  name,
  email,
  aadhar,
  phoneNumber,
  city,
  gender,
  profession,
}) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_START });

    try {
      const { status, data, message } = await apiRegister({
        name,
        email,
        aadhar,
        phoneNumber,
        city,
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
