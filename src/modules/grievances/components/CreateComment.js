/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, connect } from "react-redux";

import { CardFooter, Button } from "./viewGrievanceStyle";
import { createComment } from "../actionCreators";

const CreateComment = ({ issueId, actionCreateComment }) => {
  const reduxState = useSelector((state) => state);
  const { account } = reduxState;
  const { id: userId } = account;

  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState("");

  const onClick = async () => {
    actionCreateComment({ userId, issueId, title });
  };

  return (
    <CardFooter className="form-control card-footer">
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control col"
        placeholder="Please add your comment..."
      />

      <Button type="button" className="btn btn-primary row" onClick={onClick}>
        Post
      </Button>
    </CardFooter>
  );
};

CreateComment.propTypes = {
  issueId: PropTypes.string.isRequired,
  actionCreateComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  actionCreateComment: createComment,
};

export default connect(null, mapDispatchToProps)(CreateComment);
