/** @format */

import React from "react";

const Carousel = () => {
  return (
    <div className="container">
      {/* Carousel Wrapper */}
      <div
        id="multi-card-issues"
        className="carousel slide carousel-multi-item"
        data-ride="carousel"
      >
        {/* Controls */}
        <ul
          className="controls "
          id="sliderFirstControls"
          aria-label="Carousel Navigation"
          tabIndex="0"
        >
          <li
            className="carousel-control-prev"
            href="#multi-card-issues"
            role="button"
            data-slide="prev"
          >
            <i className="fe fe-chevron-left teal-color" />
          </li>
          <li
            className="carousel-control-next"
            href="#multi-card-issues"
            role="button"
            data-slide="next"
          >
            <i className="fe fe-chevron-right teal-color" />
          </li>
        </ul>

        <div className="controls-top">
          <a
            className="carousel-control-prev"
            href="#multi-card-issues"
            role="button"
            data-slide="prev"
          >
            <i className="fas fa-chevron-left blue-color" />
          </a>
          <a
            className="carousel-control-next"
            href="#multi-card-issues"
            role="button"
            data-slide="next"
          >
            <i className="fas fa-chevron-right blue-color" />
          </a>
        </div>
        {/*/.Controls*/}
      </div>
    </div>
  );
};
export default Carousel;
