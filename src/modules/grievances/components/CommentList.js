/** @format */

/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";

import { Comments } from "./viewGrievanceStyle";

import { getComments } from "../actionCreators";
import { FETCH_STATUS } from "../../../common/contants";
import Loader from "../../../common/components/Loaders/loader";

const CommentList = ({ issueId, actionGetComments }) => {
  const { account, issue } = useSelector(({ account, issues }) => ({
    account,
    issue: issues.list.find(({ id }) => id === issueId),
  }));
  // eslint-disable-next-line no-unused-vars
  const { accountType } = account;

  const { fetchStatus, error, list: commentList } = issue.comments;

  useEffect(() => {
    actionGetComments({ issueId });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Comments className="card-text overflow-auto text-wrap border">
      {commentList.map(
        ({ id: commentId, issueId, userId, title, createdAt }) => (
          <div
            style={{ width: "90%", margin: "20px" }}
            className="alert alert-warning d-flex float-start text-wrap"
            role="alert"
            key={commentId}
          >
            <div className="text-wrap" style={{ width: "100%" }}>
              {title}
            </div>
            <br />
          </div>
        )
      )}
      {fetchStatus === FETCH_STATUS.loading && (
        <div>
          <Loader />
        </div>
      )}
      {fetchStatus === FETCH_STATUS.error && <div>{error}</div>}
    </Comments>
  );
};

CommentList.propTypes = {
  issueId: PropTypes.string.isRequired,
  actionGetComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  actionGetComments: getComments,
};

export default connect(null, mapDispatchToProps)(CommentList);
