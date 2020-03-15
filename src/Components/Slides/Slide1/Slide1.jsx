import React from "react";
import "./Slide1.css";

const Slide1 = props => {
    return (
        <div className="wrapper_slide1 slide">
            <div className="slide1_head">
                Всегда ли цели терапии СД2
                <br />
                на поверхности?
            </div>
            <div className="text1">
                Цель по HbA1c
            </div>
            <div className="text2">
                Гипогликемия
            </div>
            <div className="text3">
                СС риски
            </div>
            <div className="text4">
                Осложнения СД
            </div>
            <div className="scroll_down" id="scroll_down" >
                <img src={require("../../../Media/next.png")} alt="next"/>
            </div>
        </div>
    );
}

export default Slide1;
