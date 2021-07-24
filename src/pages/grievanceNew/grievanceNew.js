/** @format */

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  FETCH_STATUS,
  LOCATIONS,
  GRIEVANCE_CATEGORIES,
} from "../../common/contants";
import {
  createIssue,
  resetNewIssue,
} from "../../modules/grievances/actionCreators";
import { Container } from "./styles";

function GrievanceNew({ actionCreateIssue, actionResetNewIssue }) {
  const reduxState = useSelector((state) => state);
  const { account, issues } = reduxState;
  const { location: userLocation } = account;
  const { new: newIssue } = issues;

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(userLocation);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
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
            <div className="mb-3">
              <label htmlFor="phoneNumberInput" className="form-label">
                Issue Title*
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={newIssue.status === FETCH_STATUS.loading}
              />
              <div id="phoneNumberHelp" className="form-text">
                {/* This issue type will be used by public to create grievances. */}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="locationInput" className="form-label">
                Location *
              </label>
              {/* <input
                type="text"
                className="form-control"
                id="locationInput"
                placeholder="Choose Category"
                value={location}
                onChange={(e) => setCategory(e.target.value)}
                disabled={newIssue.status === FETCH_STATUS.loading}
              /> */}
              <select
                className="form-select"
                id="locationInput"
                aria-label="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled
              >
                <option value="">Select</option>
                <option value={LOCATIONS.bangaluru}>Bangaluru</option>
                <option value={LOCATIONS.delhi}>Delhi</option>
                <option value={LOCATIONS.mumbai}>Mumbai</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="categoryInput" className="form-label">
                Category *
              </label>
              <select
                className="form-select"
                id="categoryInput"
                aria-label="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={newIssue.status === FETCH_STATUS.loading}
              >
                <option value="">Select</option>
                {GRIEVANCE_CATEGORIES.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="descriptionInput" className="form-label">
                Description*
              </label>
              <textarea
                id="descriptionInput"
                placeholder="Describe your issue"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div id="phoneNumberHelp" className="form-text">
                {/* This issue type will be used by public to create grievances. */}
              </div>
            </div>

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
