/** @format */
import isBefore from "date-fns/isBefore";

import {
  COMMENTS_GET_ERROR,
  COMMENTS_GET_START,
  COMMENTS_GET_SUCCESS,
  // COMMENT_CREATE_ERROR,
  // COMMENT_CREATE_START,
  COMMENT_CREATE_SUCCESS,
  ISSUE_CREATE_ERROR,
  ISSUE_CREATE_RESET,
  ISSUE_CREATE_START,
  ISSUE_CREATE_SUCCESS,
  ISSUE_GET_ERROR,
  ISSUE_GET_START,
  ISSUE_GET_SUCCESS,
  // ISSUE_UPDATE_ERROR,
  // ISSUE_UPDATE_START,
  // ISSUE_UPDATE_SUCCESS,
  ISSUES_GET_ERROR,
  ISSUES_GET_START,
  ISSUES_GET_SUCCESS,
} from "../../store/constants/actionTypes";

import { FETCH_STATUS } from "../../common/contants";

// This is the initial state of an existing comment
const initialStateOfComments = {
  fetchStatus: FETCH_STATUS.none,
  error: "",
  list: [],
};

// This is the initial state of an existing issue
const initialStateOfIssue = {
  fetchStatus: FETCH_STATUS.none,
  error: "",
  comments: initialStateOfComments,
};

// This is the initial state of an issue which is going to be created
const initialStateOfNewIssue = {
  fetchStatus: FETCH_STATUS.none,
  error: "",
  comments: initialStateOfComments,
};

// this is the initial state of whole issuesReducer
const initialState = {
  fetchStatus: FETCH_STATUS.none,
  error: "",
  new: initialStateOfNewIssue,
  list: [],
};

function issuesReducer(state = initialState, action) {
  switch (action.type) {
    case ISSUE_CREATE_START: {
      return {
        ...state,
        new: {
          ...initialStateOfNewIssue,
          fetchStatus: FETCH_STATUS.loading,
        },
      };
    }
    case ISSUE_CREATE_ERROR: {
      const { payload } = action;

      return {
        ...state,
        new: {
          ...state.new,
          fetchStatus: FETCH_STATUS.error,
          error: payload,
        },
      };
    }
    case ISSUE_CREATE_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        new: {
          ...state.new,
          fetchStatus: FETCH_STATUS.success,
          ...payload,
        },
      };
    }
    case ISSUE_CREATE_RESET: {
      const { new: newIssue } = state;

      return {
        ...state,
        new: {
          ...initialStateOfNewIssue,
        },
        list: [newIssue, ...state.list],
      };
    }

    case ISSUE_GET_START: {
      const { id } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            ...initialStateOfIssue,
            id,
            fetchStatus: FETCH_STATUS.loading,
          },
        ],
      };
    }
    case ISSUE_GET_ERROR: {
      const { payload } = action;
      const { id: issueId, error } = payload;

      const index = state.list.findIndex(({ id }) => issueId === id);

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...state.list[index],
            fetchStatus: FETCH_STATUS.error,
            error,
          },
          ...state.list.slice(index + 1, state.list.length),
        ],
      };
    }
    case ISSUE_GET_SUCCESS: {
      const { payload } = action;
      const { id: issueId, ...rest } = payload;

      const index = state.list.findIndex(({ id }) => issueId === id);
      // console.log(index);

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...state.list[index],
            fetchStatus: FETCH_STATUS.success,
            ...rest,
          },
          ...state.list.slice(index + 1, state.list.length),
        ],
      };
    }
    case ISSUES_GET_START: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.loading,
      };
    }
    case ISSUES_GET_ERROR: {
      const { payload } = action;
      const { error } = payload;

      return {
        ...state,
        fetchStatus: FETCH_STATUS.error,
        error,
      };
    }
    case ISSUES_GET_SUCCESS: {
      const { issues } = action.payload;

      // const list = [...state.list, ...issues];
      const list = [
        ...new Map(
          [...state.list, ...issues].map((issue) => [issue["id"], issue])
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

    case COMMENTS_GET_START: {
      const { issueId } = action.payload;

      const index = state.list.findIndex(({ id }) => issueId === id);
      const issue = state.list[index];

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...issue,
            comments: {
              ...issue.comments,
              fetchStatus: FETCH_STATUS.loading,
            },
          },
          ...state.list.slice(index + 1, state.list.length),
        ],
      };
    }
    case COMMENTS_GET_ERROR: {
      const { issueId, error } = action.payload;

      const index = state.list.findIndex(({ id }) => issueId === id);
      const issue = state.list[index];

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...issue,
            comments: {
              ...issue.comments,
              fetchStatus: FETCH_STATUS.error,
              error,
            },
          },
          ...state.list.slice(index + 1, state.list.length),
        ],
      };
    }
    case COMMENTS_GET_SUCCESS: {
      const { issueId, comments } = action.payload;

      const index = state.list.findIndex(({ id }) => issueId === id);

      // if issue is not found, just return existing state.
      if (index < 0) {
        return state;
      }

      const issue = state.list[index];

      const list = [
        ...new Map(
          [...issue.comments.list, ...comments].map((comment) => [
            comment["id"],
            comment,
          ])
        ).values(),
      ];

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...issue,
            comments: {
              ...issue.comments,
              list,
              fetchStatus: FETCH_STATUS.success,
            },
          },
          ...state.list.slice(index + 1, state.list.length),
        ],
      };
    }

    // COMMENT_CREATE_START & COMMENT_CREATE_ERROR is not
    // implemented here for now.
    case COMMENT_CREATE_SUCCESS: {
      const { issueId, comment } = action.payload;

      const index = state.list.findIndex(({ id }) => issueId === id);
      const issue = state.list[index];

      return {
        ...state,
        list: [
          ...state.list.slice(0, index),
          {
            ...issue,
            comments: {
              ...issue.comments,
              list: [...issue.comments.list, comment],
            },
          },
          ...state.list.slice(index + 1, state.list.length),
        ],
      };
    }

    default:
      return state;
  }
}

export default issuesReducer;
