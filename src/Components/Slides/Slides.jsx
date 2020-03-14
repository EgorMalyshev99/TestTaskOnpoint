import React from "react";
import s from "./Slides.module.css";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import Slide3 from "./Slide3/Slide3";


const Slides = props => {
    return (
        <div className={s.slides}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
        </div>
    );
}

export default Slides;
