/** @format */

import React from "react";
import {
  GRIEVANCE_CATEGORIES,
  GRIEVANCE_STATUS,
  LOCATIONS,
} from "../../common/contants";
import { Typeahead } from "react-bootstrap-typeahead";
import DatepickerRange from "../../common/components/Datepicker/datepicker";
import { Select, CardHead } from "./styles";

const Filter = ({
  dateRangeStart,
  setDateRangeStart,
  dateRangeEnd,
  setDateRangeEnd,
  sortBy,
  setSortBy,
  location,
  setLocation,
  category,
  setCategory,
  status,
  setStatus,
}) => {
  return (
    <div className="container-fluid">
      <CardHead className="navbar navbar-expand-lg navbar-light shadow bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Filter By</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  role="button"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Date Range
                </div>
              </li>
              <li className="nav-item">
                <Select
                  className="nav-link form-select"
                  aria-label=".form-select-lg"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option value="">Issue Status</option>
                  {Object.values(GRIEVANCE_STATUS).map((gStatus, index) => (
                    <option className="text-center" key={index} value={gStatus}>
                      {gStatus}
                    </option>
                  ))}
                </Select>
              </li>
              <li className="nav-item">
                <Select
                  className="nav-link form-select"
                  aria-label=".form-select-lg"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="">Issue Type</option>
                  {GRIEVANCE_CATEGORIES.map((category, index) => (
                    <option
                      className="text-center"
                      key={index}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </Select>
              </li>
              <li className="nav-item dropdown">
                <Select
                  className="nav-link form-select"
                  aria-label=".form-select-lg"
                  onChange={(e) => setSortBy(e.target.value)}
                  value={sortBy}
                >
                  <option className="text-center" value="">
                    Sort By
                  </option>
                  <option className="text-center" value="createdAt">
                    Latest First
                  </option>
                  <option className="text-center" value="createdAt_desc">
                    Oldest First
                  </option>
                </Select>
              </li>
            </ul>

            <Typeahead
              id="selectLocation"
              onChange={setLocation}
              options={Object.entries(LOCATIONS).map(([value, label]) => ({
                label: label,
                value: value,
              }))}
              placeholder="Choose a city..."
              selected={location}
            />
          </div>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Select the date
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center">
                  <div>
                    Start Date:{" "}
                    <DatepickerRange
                      date={dateRangeStart}
                      setDate={setDateRangeStart}
                    />
                  </div>
                  <div>
                    End Date:{" "}
                    <DatepickerRange
                      date={dateRangeEnd}
                      setDate={setDateRangeEnd}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardHead>
    </div>
  );
};

export default Filter;
