import React from "react";
import "./Slides.css";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import Slide3 from "./Slide3/Slide3";

const Slides = props => {
  return (
    <div className="slides_wrapper" id="slides_wrapper" >
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </div>
  );
};

export default Slides;
