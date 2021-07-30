/** @format */

import React from "react";
import { useHistory } from "react-router-dom";

import { CardHead, Image, P } from "../styles";

const Cards = ({ cover, title, content, id }) => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/grievances/${id}`);
  };

  return (
    <div className="col-md-3  float-left">
      <CardHead className="card mb-2 mb-3 h-100">
        <div className="card-title card-header h4">{title}</div>
        <Image className="card-img-top img-thumbnail" src={cover} alt="" />
        <div className="card-body">
          <P className="card-text fst-italic">{content}</P>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary col-12"
            type="button"
            onClick={handleClick}
          >
            See more
          </button>
        </div>
      </CardHead>
    </div>
  );
};

export default Cards;
