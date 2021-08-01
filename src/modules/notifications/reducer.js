/** @format */
import isBefore from "date-fns/isBefore";

import {
  NOTIFICATIONS_GET_START,
  NOTIFICATIONS_GET_SUCCESS,
  NOTIFICATIONS_GET_ERROR,
} from "../../store/constants/actionTypes";

import { FETCH_STATUS } from "../../common/contants";

// this is the initial state of whole notificationsReducer
const initialState = {
  fetchStatus: FETCH_STATUS.none,
  error: "",
  list: [],
};

function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATIONS_GET_START: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.loading,
      };
    }
    case NOTIFICATIONS_GET_ERROR: {
      const { payload } = action;
      const { error } = payload;

      return {
        ...state,
        fetchStatus: FETCH_STATUS.error,
        error,
      };
    }
    case NOTIFICATIONS_GET_SUCCESS: {
      const { notifications } = action.payload;

      const list = [
        ...new Map(
          [...state.list, ...notifications].map((issue) => [issue["id"], issue])
        ).values(),
      ].sort((issue1, issue2) =>
        isBefore(
          new Date(issue1.createdAt).getTime(),
          new Date(issue2.createdAt).getTime()
        )
      );

      return {
        ...state,
        fetchStatus: FETCH_STATUS.success,
        list,
      };
    }

    default:
      return state;
  }
}

export default notificationsReducer;
