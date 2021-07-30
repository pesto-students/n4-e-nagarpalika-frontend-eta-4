/** @format */
/* eslint-disable no-unused-vars */

import React from "react";

import Cards from "./cards/cards";

const GrievanceCardGrid = ({
  category,
  dateRangeEnd,
  dateRangeStart,
  issues,
  location,
  sortBy,
  status,
}) => {
  let list = [...issues];

  if (location.length > 0) {
    list = list.filter((issue) => issue.location === location);
  }
  if (category.length > 0) {
    list = list.filter((issue) => issue.category === category);
  }
  if (status.length > 0) {
    list = list.filter((issue) => issue.status === status);
  }

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {list.map((issue) => (
          <Cards
            key={issue.id}
            content={issue.description}
            cover={issue.images[0]}
            title={issue.title}
            id={issue.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GrievanceCardGrid;
