/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Cards/Card";

const StyledImage = styled.img`
  width: 100%;
`;

const Carousel = ({ id, buttonNext, buttonPrev, items }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count + 1) % items.length);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <Card
      id={id}
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        height: "50vh",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <div className="carousel-indicators">
        {items.map((_item, index) => (
          <button
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            className={index === count ? "active" : ""}
            data-bs-slide-to={index}
            data-bs-target={`#${id}`}
            key={`${index}`}
            type="button"
            onClick={() => setCount(index)}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {items.map(({ title, description, url }, index) => {
          return (
            <div
              className={`carousel-item ${index === count ? "active" : ""}`}
              key={`${index}`}
              data-bs-interval="1000"
            >
              <StyledImage src={url} alt={title || url} />
              {title && description ? (
                <div className="carousel-caption d-none d-md-block">
                  {title && <h5>{title}</h5>}
                  {description && <p>{description}</p>}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {buttonPrev && (
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
      )}
      {buttonNext && (
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      )}
    </Card>
  );
};

Carousel.propTypes = {
  buttonNext: PropTypes.bool,
  buttonPrev: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

Carousel.defaultProps = {
  buttonNext: false,
  buttonPrev: false,
};

export default Carousel;
