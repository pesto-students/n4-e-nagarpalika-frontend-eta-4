/** @format */

import React from "react";

const Cards = ({ url, title, content }) => {
  return (
    <div className="col-md-3" style={{ float: `left` }}>
      <div className="card mb-2">
        <img className="card-img-top" src={url} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{content}</p>
          <a className="btn btn-primary" href="#">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
