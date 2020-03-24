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

  const handleOnBeforeChange = () => {
    document.getElementsByClassName('DefaultHandle_handle')[0].style.transition = "all 0s";
    document.getElementsByClassName('DefaultProgressBar_progressBar')[0].style.transition = "all 0s";
  };

  const handleOnAfterChange = () => {
    console.log(sliderPos[0]);

    document.getElementsByClassName('DefaultHandle_handle')[0].style.transition = "all 1s";
    document.getElementsByClassName('DefaultProgressBar_progressBar')[0].style.transition = "all 1s";
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
          <div className="ice1_wrapper">
            <div className="ice1_1"></div>
            <div className="ice1_2"></div>
            <div className="ice1_3"></div>
          </div>
        </div>
        <div className="scheme-2 scheme">
          <div className="ice2_wrapper">
            <div className="ice2_1"></div>
            <div className="ice2_2"></div>
            <div className="ice2_3"></div>
          </div>
        </div>
        <div className="scheme-3 scheme">
          <div className="ice3_wrapper">
            <div className="ice3_1"></div>
            <div className="ice3_2"></div>
            <div className="ice3_3"></div>
          </div>
        </div>
      </div>
      <Rheostat
        onValuesUpdated={handleSliderMove}
        values={sliderPos}
        onSliderDragEnd={handleOnAfterChange}
        onSliderDragStart={handleOnBeforeChange}
      />
    </div>
  );
};

export default BaseSlider;
