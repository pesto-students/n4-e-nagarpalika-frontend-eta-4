/** @format */

import React, { useState } from "react";
import {
  GRIEVANCE_CATEGORIES,
  GRIEVANCE_STATUS,
  LOCATIONS_ARR,
} from "../../common/contants";
import { Typeahead } from "react-bootstrap-typeahead";
import DatepickerRange from "../../common/components/Datepicker/datepicker";
import { Select, CardHead } from "./styles";

const Filter = (props) => {
  const [selected, setSelected] = useState([]);
  const [filterData, setFilterData] = useState();

  if (selected) {
    props.filterProps(selected);
  }
  const selectFilterData = (e) => {
    props.filterProps(e.target.value);
    setFilterData(e.target.value);
  };
  const dictToArr = (dict) => {
    return Object.values(dict);
  };

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
                  className=" nav-link form-select"
                  aria-label=".form-select-lg"
                  onChange={selectFilterData}
                  value={filterData}
                >
                  <option value="">Issue Status</option>
                  {dictToArr(GRIEVANCE_STATUS).map((issueStat, index) => (
                    <option
                      className="text-center"
                      key={index}
                      value={issueStat}
                    >
                      {issueStat}
                    </option>
                  ))}
                </Select>
              </li>
              <li className="nav-item">
                <Select
                  className=" nav-link form-select"
                  aria-label=".form-select-lg"
                  onChange={selectFilterData}
                  value={filterData}
                >
                  {" "}
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
                  className=" nav-link form-select"
                  aria-label=".form-select-lg"
                  onChange={selectFilterData}
                  value={filterData}
                >
                  <option className="text-center" value="">
                    Sort By
                  </option>
                  <option className="text-center" value="latestFirst">
                    Latest First
                  </option>
                  <option className="text-center" value="oldestFirst">
                    Oldest First
                  </option>
                </Select>
              </li>
            </ul>
            {/*<form className="d-flex">*/}
            {/*  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
            {/*    <button className="btn btn-primary" type="button">Search</button>*/}
            {/*</form>*/}
            <Typeahead
              id="basic-example"
              onChange={setSelected}
              options={LOCATIONS_ARR}
              placeholder="Choose a city..."
              selected={selected}
            />
          </div>
          {/*</div>*/}
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
                    Start Date: <DatepickerRange />
                  </div>
                  <div>
                    End Date: <DatepickerRange />
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
