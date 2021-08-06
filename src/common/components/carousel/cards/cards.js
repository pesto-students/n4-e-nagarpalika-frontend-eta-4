/** @format */

import React from "react";
import { useHistory } from "react-router-dom";

import { CardHead, Image, P } from "../styles";

const Cards = ({ cover, title, content, createdAt, id }) => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/grievances/${id}`);
  };

  return (
    <div className="col-xl-3  float-left">
      <CardHead className="card mb-2 h-100">
        <Image className="card-img-top img-thumbnail" src={cover} alt="" />
        <div className="card-body">
          <div
            className="card-title overflow-auto h4"
            style={{ height: "70px" }}
          >
            {title}
          </div>
          <P className="card-text fst-italic">{content}</P>
          <p className="card-text float-end">
            <i className="far fa-calendar" />
            {"  "}
            {createdAt.slice(0, 10)}
            {"  "}
            <i className="far fa-clock" />
            {"  "}
            {createdAt.slice(11, -5)}
          </p>
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
