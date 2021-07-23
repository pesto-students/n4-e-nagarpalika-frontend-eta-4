/** @format */

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { FETCH_STATUS } from "../../common/contants";
import {
  createIssue,
  resetNewIssue,
} from "../../modules/grievances/actionCreators";
import { Container } from "./styles";

function GrievanceNew({ actionCreateIssue, actionResetNewIssue }) {
  const issues = useSelector((state) => state.issues);
  const { new: newIssue } = issues;

  const history = useHistory();

  const [title, setTitle] = useState("this is new issue");
  const [location, setLocation] = useState("mumbai");
  const [category, setCategory] = useState("traffic");
  const [description, setDescription] = useState("asdf adsf adsf adsf asd f");
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([
    "https://picsum.photos/id/1/400/400",
    "https://picsum.photos/id/2/400/400",
    "https://picsum.photos/id/3/400/400",
    "https://picsum.photos/id/4/400/400",
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await actionCreateIssue({
      title,
      location,
      category,
      description,
      images,
    });
  };

  useEffect(() => {
    if (newIssue.status === FETCH_STATUS.success) {
      const newIssueId = newIssue._id;

      actionResetNewIssue();

      history.push(`/grievances/${newIssueId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newIssue]);

  return (
    <Container>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Create A Grievance</h5>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={newIssue.status === FETCH_STATUS.loading}
            />

            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Choose Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={newIssue.status === FETCH_STATUS.loading}
            />

            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={newIssue.status === FETCH_STATUS.loading}
            />

            <textarea
              id="description"
              placeholder="Describe your issue"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {images.map((url) => (
              <img
                src={url}
                alt="issue detail"
                key={url}
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "1px",
                }}
              />
            ))}

            <p>{newIssue.status}</p>

            {newIssue.status === FETCH_STATUS.error ? (
              <p>{newIssue.error}</p>
            ) : null}

            <button
              type="reset"
              className="btn btn-secondary"
              disabled={newIssue.status === FETCH_STATUS.loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={newIssue.status === FETCH_STATUS.loading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

const mapDispatchToProps = {
  actionCreateIssue: createIssue,
  actionResetNewIssue: resetNewIssue,
};

export default connect(null, mapDispatchToProps)(GrievanceNew);
