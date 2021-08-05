/** @format */

import React from "react";
import { I, ControlNext, ControlPrev } from "./styles";
import Cards from "./cards/cards";
import "./styles.css";

const Carousel = ({ issues, title }) => {
  return (
    <div className="container">
      <div className="container  my-3">
        <h2 className="font-weight-light">{title} Issues</h2>
        <div className="row mx-auto my-auto justify-content-center">
          <div
            id="issueCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ControlPrev
              className="carousel-control-prev bg-transparent w-aut"
              href="#issueCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <I className="fas fa-chevron-circle-left" />
            </ControlPrev>
            <ControlNext
              className="carousel-control-next bg-transparent w-aut"
              href="#issueCarousel"
              role="button"
              data-bs-slide="next"
            >
              <I className="fas fa-chevron-circle-right" />
            </ControlNext>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                {issues.slice(0, 4).map((issue) => (
                  <Cards
                    key={issue.id}
                    content={issue.description}
                    cover={issue.images[0]}
                    title={issue.title}
                    id={issue.id}
                  />
                ))}
              </div>

              <div className="carousel-item">
                {issues.slice(4).map((issue) => (
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
        </div>
      </div>
    </div>
  );
};

export default Carousel;
