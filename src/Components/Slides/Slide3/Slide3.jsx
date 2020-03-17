import React from "react";
import "./Slide3.css";
import BaseSlider from "../../Slider/Slider";

const Slide3 = props => {
  return (
    <div className="wrapper_slide3 slide">
      <div className="scroll_line"></div>
      <BaseSlider />
      <div className="date_wrapper">
        <div className="date1">1998</div>
        <div className="date2">2009</div>
        <div className="date3">2016</div>
      </div>
    </div>
  );
};

export default Slide3;
