/** @format */
import { FETCH_STATUS } from "../../common/contants";
import {
  LOG_IN_ERROR,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_OUT_START,
  LOG_OUT_ERROR,
  LOG_OUT_SUCCESS,
  REGISTER_START,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  status: FETCH_STATUS.none, // "LOADING", "SUCCESS", "ERROR", "NONE"
  error: "",
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_START: {
      return {
        ...state,
        status: FETCH_STATUS.loading,
      };
    }

    case LOG_IN_ERROR: {
      const { payload } = action;

      return {
        ...state,
        status: FETCH_STATUS.error,
        error: payload,
      };
    }

    case LOG_IN_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        status: FETCH_STATUS.success,
        isLoggedIn: true,
        ...payload,
      };
    }

    case LOG_OUT_START: {
      return {
        ...state,
        status: FETCH_STATUS.loading,
      };
    }

    case LOG_OUT_ERROR: {
      const { value } = action;

      return {
        ...state,
        status: FETCH_STATUS.error,
        error: value,
      };
    }

    case LOG_OUT_SUCCESS: {
      return initialState;
    }

    case REGISTER_START: {
      return {
        ...state,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

export default accountReducer;
