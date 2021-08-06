/** @format */

import {
  NOTIFICATIONS_GET_START,
  NOTIFICATIONS_GET_SUCCESS,
  NOTIFICATIONS_GET_ERROR,
} from "../../store/constants/actionTypes";

import { getNotifications as apiGetNotifications } from "./api";

export function getNotifications({ userId, page = 0, limit = 25 }) {
  return async (dispatch) => {
    dispatch({ type: NOTIFICATIONS_GET_START });

    try {
      const { status, data, message } = await apiGetNotifications({
        userId,
        page,
        limit,
      });

      if (status === "Success") {
        const { notifications } = data;

        dispatch({
          type: NOTIFICATIONS_GET_SUCCESS,
          payload: { notifications },
        });
      } else {
        dispatch({ type: NOTIFICATIONS_GET_ERROR, payload: message });
      }
    } catch (error) {
      dispatch({ type: NOTIFICATIONS_GET_ERROR, payload: error });
    }
  };
}
