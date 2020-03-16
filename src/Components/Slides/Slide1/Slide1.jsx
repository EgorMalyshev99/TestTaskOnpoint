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
            <div className="circle1">
            </div>

            <div className="circles">
                <div className="circle_1 pulse">
                    <div className="circle_1_wrap wrap">
                        <div className="circle_1_circle circumference"></div>
                    </div>
                </div>

                <div className="circle_2 pulse">
                    <div className="circle_2_wrap wrap">
                        <div className="circle_2_circle circumference"></div>
                    </div>
                </div>

                <div className="circle_3 pulse">
                    <div className="circle_3_wrap wrap">
                        <div className="circle_3_circle circumference"></div>
                    </div>
                </div>

                <div className="circle_4 pulse">
                    <div className="circle_4_wrap wrap">
                        <div className="circle_4_circle circumference"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Slide1;
