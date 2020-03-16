import React, { useState, useRef } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Slider.css";

const BaseSlider = () => {
  const [sliderState, setSliderState] = useState(2);
  const currentValue = 100;

  const handleSliderMove = value => {
    sliderState !== 0 && value <= 33 && setSliderState(0);
    sliderState !== 1 && value >= 33 && value <= 66 && setSliderState(1);
    sliderState !== 2 && value >= 66 && setSliderState(2);
  };

  const schemeOneRef = useRef();

  const qqq = () => {
    if (schemeOneRef.current)
      schemeOneRef.current.style.transform = "translateX(-2048px)";
  };

  const qqqwww = () => {
    if (schemeOneRef.current)
      schemeOneRef.current.style.transform = "translate(0)";
  };

  return (
    <div>
      {sliderState === 1 && qqq()}
      {sliderState === 0 && qqqwww()}
      <div className="scheme-wrapper" ref={schemeOneRef}>
        <div className="scheme-1 scheme" ></div>
        <div className="scheme-2 scheme"></div>
        <div className="scheme-3 scheme"></div>
      </div>
      <Slider
        onChange={handleSliderMove}
        defaultValue={currentValue}
        className="slider"
      />
    </div>
  );
};

export default BaseSlider;
