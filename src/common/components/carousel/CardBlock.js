/** @format */

import React from "react";
import Cards from "./cards/cards";

const CardBlock = ({ issues }) => {
  return (
      <div className="container">
    <div className="card-group">
        <h2 className="font-weight-light text-center">All Issues</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto my-auto ">
        {issues.map((issue) => (
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
    </div>
  );
};
export default CardBlock;
