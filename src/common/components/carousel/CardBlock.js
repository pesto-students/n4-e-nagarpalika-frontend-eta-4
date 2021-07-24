/** @format */

import React from "react";
import classnames from "classnames";
import Cards from "./cards/cards";

const CardBlock = ({ issues }) => {
  console.log(issues[0]);
  return (
    <div className="container">
      <div className={classnames("row row-cols-1 row-cols-md- g-4")}>
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
  );
};
export default CardBlock;
