/** @format */

import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Image, DivImage, Slider } from "./styles";

const ImageSlider = ({ SliderData }) => {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Slider>
      <FaArrowAltCircleLeft onClick={prevSlide} />
      {/* eslint-disable-next-line */}
      {SliderData.map((slide, index) => {
        return (
          <DivImage
            sliderStyle={index === current ? "slideActive" : "slide"}
            key={slide}
          >
            {index === current && <Image src={slide} alt="travel image" />}
          </DivImage>
        );
      })}
      <br />
      <FaArrowAltCircleRight onClick={nextSlide} />
    </Slider>
  );
};

export default ImageSlider;
