/** @format */

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const PageItem = ({ count, disabled }) => (
  <li
    className={classnames(`page-item`, {
      disabled: disabled,
    })}
  >
    <a className="page-link" href="#">
      {count}
    </a>
  </li>
);

const Pagination = ({ center }) => {
  return (
    <nav aria-label="Page navigation">
      <ul
        className={classnames("pagination", {
          "justify-content-center": center,
        })}
      >
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  center: PropTypes.bool,
};

Pagination.defaultProps = {
  center: true,
};

export default Pagination;
