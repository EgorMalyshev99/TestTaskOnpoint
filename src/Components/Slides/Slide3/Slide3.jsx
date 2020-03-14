import React from "react";
import s from "./Slide3.module.css";
import Part1 from "./Part1/Part1";
import Part2 from "./Part2/Part2";
import Part3 from "./Part3/Part3";

const Slide3 = props => {
    return (
        <div>
            <Part1 />
            <Part2 />
            <Part3 />
            <div className={s.scroll_line}></div>
        </div>
    );
}

export default Slide3;
