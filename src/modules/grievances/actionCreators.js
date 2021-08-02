/** @format */

import {
  COMMENTS_GET_ERROR,
  COMMENTS_GET_START,
  COMMENTS_GET_SUCCESS,
  COMMENT_CREATE_ERROR,
  COMMENT_CREATE_START,
  COMMENT_CREATE_SUCCESS,
  ISSUE_CREATE_ERROR,
  ISSUE_CREATE_RESET,
  ISSUE_CREATE_START,
  ISSUE_CREATE_SUCCESS,
  ISSUE_GET_ERROR,
  ISSUE_GET_START,
  ISSUE_GET_SUCCESS,
  ISSUE_UPDATE_ERROR,
  ISSUE_UPDATE_START,
  ISSUE_UPDATE_SUCCESS,
  ISSUES_GET_ERROR,
  ISSUES_GET_START,
  ISSUES_GET_SUCCESS,
} from "../../store/constants/actionTypes";

import {
  createIssue as apiCreateIssue,
  // getAllAdminIssues as apiGetAllAdminIssues,
  getAllUserIssues as apiGetAllUserIssues,
  getIssue as apiGetIssue,
  updateIssue as apiUpdateIssue,
  createComment as apiCreateComment,
  getComments as apiGetComments,
} from "./api";

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
  coordinates,
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
        coordinates,
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

/**
 *
 * @param {Object} params
 * @param {String} params.issueId
 * @param {String} params.title
 * @param {String} params.description
 * @param {String[]} params.location
 * @param {String} params.status
 * @returns
 */
export function updateIssue({
  issueId,
  title,
  description,
  location,
  images,
  status,
}) {
  return async (dispatch) => {
    dispatch({
      type: ISSUE_UPDATE_START,
      payload: { issueId },
    });

    try {
      const {
        status: fetchStatus,
        data,
        message,
      } = await apiUpdateIssue({
        issueId,
        title,
        description,
        location,
        images,
        status,
      });

      if (fetchStatus === "Success") {
        const { issue } = data;

        dispatch({
          type: ISSUE_UPDATE_SUCCESS,
          payload: { issueId, issue },
        });
      } else {
        dispatch({
          type: ISSUE_UPDATE_ERROR,
          payload: { issueId, error: message },
        });
      }
    } catch (error) {
      dispatch({
        type: ISSUE_UPDATE_ERROR,
        payload: { issueId, error },
      });
    }
  };
}

export function getAllUserIssue({
  userId,
  dateRangeStart,
  dateRangeEnd,
  sortBy,
  location,
  category,
  status: issueStatus,
}) {
  return async (dispatch) => {
    dispatch({ type: ISSUES_GET_START });

    try {
      const { status, data, message } = await apiGetAllUserIssues({
        userId,
        dateRangeStart,
        dateRangeEnd,
        sortBy,
        location,
        category,
        status: issueStatus,
      });

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

export function createComment({ userId, issueId, title }) {
  return async (dispatch) => {
    dispatch({ type: COMMENT_CREATE_START });

    try {
      const { status, data, message } = await apiCreateComment({
        userId,
        issueId,
        title,
      });

      if (status === "Success") {
        const { comment } = data;

        dispatch({
          type: COMMENT_CREATE_SUCCESS,
          payload: { issueId, comment },
        });
      } else {
        dispatch({
          type: COMMENT_CREATE_ERROR,
          payload: { issueId, message },
        });
      }
    } catch (error) {
      dispatch({
        type: COMMENT_CREATE_ERROR,
        payload: { issueId, error },
      });
    }
  };
}

export function getComments({ issueId }) {
  return async (dispatch) => {
    dispatch({
      type: COMMENTS_GET_START,
      payload: { issueId },
    });

    try {
      const { status, data, message } = await apiGetComments({ issueId });

      if (status === "Success") {
        const { comments } = data;

        dispatch({
          type: COMMENTS_GET_SUCCESS,
          payload: { issueId, comments },
        });
      } else {
        dispatch({
          type: COMMENTS_GET_ERROR,
          payload: { issueId, error: message },
        });
      }
    } catch (error) {
      dispatch({
        type: COMMENTS_GET_ERROR,
        payload: { issueId, error },
      });
    }
  };
}
