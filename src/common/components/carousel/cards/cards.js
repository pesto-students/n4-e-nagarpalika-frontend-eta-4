/** @format */

import React from "react";
import { CardHead, Image } from "../styles";

const Cards = ({ cover, title, content, id }) => {
  return (
    <CardHead className="col-md-3 float-left">
      <div className="card mb-2">
        <Image className="card-img-top" src={cover} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-truncate">{content}</p>
          <a className="btn btn-primary col-12" type="button" href={`/grievances/${id}`}>
            See More
          </a>
        </div>
      </div>
    </CardHead>
  );
};

export default Cards;
