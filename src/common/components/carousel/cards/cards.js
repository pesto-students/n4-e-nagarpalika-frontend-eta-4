/** @format */

import React from "react";
import { CardHead, Image, P } from "../styles";

const Cards = ({ cover, title, content, id }) => {
  return (
    <div className="col-md-3  float-left">
      <CardHead className="card mb-2 mb-3 h-100">
        <div className="card-title card-header">{title}</div>
        <Image className="card-img-top img-thumbnail" src={cover} alt="" />
        <div className="card-body">
          <P className="card-text">{content}</P>
        </div>
        <div className="card-footer">
          <a
            className="btn btn-primary col-12"
            type="button"
            href={`/grievances/${id}`}
          >
            See More
          </a>
        </div>
      </CardHead>
    </div>
  );
};

export default Cards;
