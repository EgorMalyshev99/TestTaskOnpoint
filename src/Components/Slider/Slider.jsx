import React, { useState, useRef } from "react";
import "./Slider.css";
import Rheostat from "rheostat";
import "rheostat/initialize";

const BaseSlider = () => {
  const [sliderState, setSliderState] = useState(2);
  const [sliderPos, setSliderPos] = useState([100]);

  const handleSliderMove = value => {
    const currentValue = value.values[0] && value.values[0];
    setSliderPos([currentValue]);

    sliderState !== 0 && currentValue <= 33 && setSliderState(0);
    sliderState !== 1 &&
      currentValue >= 33 &&
      currentValue <= 66 &&
      setSliderState(1);
    sliderState !== 2 && currentValue >= 66 && setSliderState(2);
  };

  const handleOnAfterChange = () => {
    console.log(sliderPos[0]);

    sliderPos <= 33 && setSliderPos([0]);
    sliderPos >= 33 && sliderPos <= 66 && setSliderPos([50]);
    sliderPos >= 66 && setSliderPos([100]);
  };

  const schemePosition = () => {
    switch (sliderState) {
      case 0:
        schemeOneRef.current.style.transform = "translateX(0)";
        break;
      case 1:
        schemeOneRef.current.style.transform = "translate(-1024px)";
        break;
      case 2:
        schemeOneRef.current.style.transform = "translateX(-2048px)";
        break;
      default:
        return;
    }
  };

  const schemeOneRef = useRef();

  return (
    <div className="slider_div">
      {schemeOneRef.current && schemePosition()}
      <div className="scheme-wrapper" ref={schemeOneRef}>
        <div className="scheme-1 scheme">
          <img src={require("../../Media/scheme1.png")} alt="" />
          <div className="ice1_wrapper">
            <img className="ice1_1" src={require("../../Media/ice1_1.png")} alt="" />
            <img className="ice1_2" src={require("../../Media/ice1_2.png")} alt="" />
            <img className="ice1_3" src={require("../../Media/ice1_3.png")} alt="" />
          </div>
        </div>
        <div className="scheme-2 scheme">
          <img src={require("../../Media/scheme2.png")} alt="" />
          <div className="ice2_wrapper">
            <img className="ice2_1" src={require("../../Media/ice1_1.png")} alt="" />
            <img className="ice2_2" src={require("../../Media/ice2_2.png")} alt="" />
            <img className="ice2_3" src={require("../../Media/ice2_3.png")} alt="" />
          </div>
        </div>
        <div className="scheme-3 scheme">
          <img src={require("../../Media/scheme3.png")} alt="" />
          <div className="ice3_wrapper">
            <img className="ice3_1" src={require("../../Media/ice3_1.png")} alt="" />
            <img className="ice3_2" src={require("../../Media/ice3_2.png")} alt="" />
            <img className="ice3_3" src={require("../../Media/ice3_3.png")} alt="" />
          </div>
        </div>
      </div>
      <Rheostat
        onValuesUpdated={handleSliderMove}
        values={sliderPos}
        onSliderDragEnd={handleOnAfterChange}
      />
    </div>
  );
};

export default BaseSlider;
