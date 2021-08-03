/** @format */
import { FETCH_STATUS } from "../../common/contants";
import {
  ACCOUNT_INIT,
  LOG_IN_ERROR,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_OUT_ERROR,
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_START,
  REGISTER_SUCCESS,
  // USER_UPDATE_ERROR,
  // USER_UPDATE_START,
  USER_UPDATE_SUCCESS,
} from "../../store/constants/actionTypes";

const initialState = {
  isInit: false,
  isLoggedIn: false,
  fetchStatus: FETCH_STATUS.none, // "LOADING", "SUCCESS", "ERROR", "NONE"
  error: "",
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_INIT: {
      return {
        ...initialState,
        isInit: true,
      };
    }

    case LOG_IN_START: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.loading,
      };
    }

    case LOG_IN_ERROR: {
      const { payload } = action;

      return {
        ...state,
        isInit: true,
        fetchStatus: FETCH_STATUS.error,
        error: payload,
      };
    }

    case LOG_IN_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        isInit: true,
        fetchStatus: FETCH_STATUS.success,
        isLoggedIn: true,
        ...payload,
      };
    }

    case LOG_OUT_START: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.loading,
      };
    }

    case LOG_OUT_ERROR: {
      const { payload } = action;

      return {
        ...state,
        fetchStatus: FETCH_STATUS.error,
        error: payload,
      };
    }

    case LOG_OUT_SUCCESS: {
      return {
        ...initialState,
        isInit: true,
      };
    }

    case REGISTER_START: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.loading,
      };
    }
    case REGISTER_ERROR: {
      const { payload } = action;

      return {
        ...state,
        fetchStatus: FETCH_STATUS.error,
        error: payload,
      };
    }
    case REGISTER_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        fetchStatus: FETCH_STATUS.success,
        ...payload,
      };
    }

    case USER_UPDATE_SUCCESS: {
      const { user } = action.payload;

      return {
        ...state,
        fetchStatus: FETCH_STATUS.success,
        ...user,
      };
    }

    default:
      return state;
  }
}

export default accountReducer;
