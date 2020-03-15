import React from "react";
import "./Slide3.css";
import Part1 from "./Part1/Part1";
import Part2 from "./Part2/Part2";
import Part3 from "./Part3/Part3";

const Slide3 = props => {
    return (
        <div className="wrapper_slide3 slide">
            <Part1 />
            <Part2 />
            <Part3 />
            <div className="scroll_line"></div>
        </div>
    );
}

export default Slide3;
