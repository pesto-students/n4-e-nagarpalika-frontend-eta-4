/** @format */

import React, { useState } from "react";

import { LOCATIONS } from "../../common/contants";

import { createIssueType } from "../../modules/grievances/api";

const CreateIssueTypes = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  // const [textColor, setColor] = useState("#f50808");
  // const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await createIssueType({ title, location });

    console.log(data);
  };

  return (
    <div className="container-flex">
      <form className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="issueTypeInput" className="form-label">
              Issue Type*
            </label>
            <input
              type="text"
              className="form-control"
              id="issueTypeInput"
              aria-describedby="issueTypeHelp"
              placeholder="Issue Type"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div id="issueTypeHelp" className="form-text">
              This issue type will be used by public to create grievances.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="locationInput" className="form-label">
              City*
            </label>
            <select
              className="form-select"
              id="locationInput"
              aria-label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select</option>
              <option value={LOCATIONS.bangaluru}>Bangaluru</option>
              <option value={LOCATIONS.delhi}>Delhi</option>
              <option value={LOCATIONS.mumbai}>Mumbai</option>
            </select>
          </div>
          <div id="formHelp" className="form-text">
            Required fields are marked with (*)
          </div>
        </div>

        <div className="card-footer">
          <button
            type="button"
            className="btn btn-primary"
            disabled={loading || title.length < 1 || location.length < 1}
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateIssueTypes;
