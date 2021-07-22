/** @format */

import {
  ISSUE_CREATE_RESET,
  ISSUE_CREATE_START,
  ISSUE_CREATE_SUCCESS,
  ISSUE_CREATE_ERROR,
  ISSUE_GET_START,
  ISSUE_GET_SUCCESS,
  ISSUE_GET_ERROR,
  ISSUES_GET_START,
  ISSUES_GET_SUCCESS,
  ISSUES_GET_ERROR,
} from "../constants/actionTypes";

import {
  createIssue as apiCreateIssue,
  // getAllAdminIssues as apiGetAllAdminIssues,
  getAllUserIssues as apiGetAllUserIssues,
  getIssue as apiGetIssue,
  // updateIssue as apiUpdateIssue,
} from "../../common/api/api";

export function resetNewIssue() {
  return async (dispatch) => {
    dispatch({ type: ISSUE_CREATE_RESET });
  };
}

export function createIssue({
  title,
  description,
  location,
  category,
  images,
}) {
  return async (dispatch) => {
    dispatch({ type: ISSUE_CREATE_START });

    try {
      const { status, data, message } = await apiCreateIssue({
        title,
        description,
        location,
        category,
        images,
      });

      if (status === "Success") {
        const { issue } = data;

        dispatch({ type: ISSUE_CREATE_SUCCESS, payload: issue });
      } else {
        dispatch({ type: ISSUE_CREATE_ERROR, payload: message });
      }
    } catch (error) {
      dispatch({ type: ISSUE_CREATE_ERROR, payload: error });
    }
  };
}

// export function updateIssue({
//   name,
//   email,
//   aadhar,
//   phoneNumber,
//   city,
//   gender,
//   profession,
// }) {
//   return async (dispatch) => {
//     dispatch({ type: ISSUE_CREATE_START });

//     try {
//       const { status, data, message } = await apiCreateIssue({
//         name,
//         email,
//         aadhar,
//         phoneNumber,
//         city,
//         gender,
//         profession,
//       });

//       if (status === "Success") {
//         const { user } = data;

//         dispatch({ type: ISSUE_CREATE_SUCCESS, payload: user });
//       } else {
//         dispatch({ type: ISSUE_CREATE_ERROR, payload: message });
//       }
//     } catch (error) {
//       dispatch({ type: ISSUE_CREATE_ERROR, payload: error });
//     }
//   };
// }

export function getAllUserIssue({ userId }) {
  return async (dispatch) => {
    dispatch({ type: ISSUES_GET_START });

    try {
      const { status, data, message } = await apiGetAllUserIssues({ userId });

      if (status === "Success") {
        const { issues } = data;

        dispatch({
          type: ISSUES_GET_SUCCESS,
          payload: { issues },
        });
      } else {
        dispatch({
          type: ISSUES_GET_ERROR,
          payload: { error: message },
        });
      }
    } catch (error) {
      dispatch({
        type: ISSUES_GET_ERROR,
        payload: { error },
      });
    }
  };
}

// export function getAllAdminIssue({}) {
//   return async (dispatch) => {
//     dispatch({ type: ISSUE_CREATE_START });

//     try {
//       const { status, data, message } = await apiGetAllAdminIssues({});

//       if (status === "Success") {
//         const { issues } = data;

//         dispatch({ type: ISSUE_CREATE_SUCCESS, payload: issues });
//       } else {
//         dispatch({ type: ISSUE_CREATE_ERROR, payload: message });
//       }
//     } catch (error) {
//       dispatch({ type: ISSUE_CREATE_ERROR, payload: error });
//     }
//   };
// }

export function getIssue({ id }) {
  return async (dispatch) => {
    dispatch({
      type: ISSUE_GET_START,
      payload: { id },
    });

    try {
      const { status, data, message } = await apiGetIssue({ id });

      if (status === "Success") {
        const { issue } = data;

        dispatch({
          type: ISSUE_GET_SUCCESS,
          payload: issue,
        });
      } else {
        dispatch({
          type: ISSUE_GET_ERROR,
          payload: { id, error: message },
        });
      }
    } catch (error) {
      dispatch({
        type: ISSUE_GET_ERROR,
        payload: { id, error },
      });
    }
  };
}
