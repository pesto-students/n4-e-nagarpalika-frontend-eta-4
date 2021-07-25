/** @format */

import React from "react";
import {CardHead} from '../styles';

const Cards = ({ image_url, title, content, url }) => {
  return (
    <CardHead className="col-md-3 float-left">
      <div className="card mb-2">
        <img className="card-img-top" src={image_url} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-truncate">{content}</p>
          <a className="btn btn-primary btn-block" href={url}>
            See More
          </a>
        </div>
      </div>
    </CardHead>
  );
};

export default Cards;
