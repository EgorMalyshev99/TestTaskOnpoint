import React from "react";
import "./Slide2.css";

const Slide2 = props => {
    return (
        <div className="wrapper_slide2 slide">
            <div className="text">
                Основа терапии –
                <br />
                патогенез СД2
            </div>
            <div className="wrapper_ice_slide2">
                <img className="slide2_ice1" src={require("../../../Media/slide2_ice1.png")} alt="" />
                <img className="slide2_ice2" src={require("../../../Media/slide2_ice2.png")} alt="" />
                <img className="slide2_ice3" src={require("../../../Media/slide2_ice3.png")} alt="" />
                <img className="slide2_ice4" src={require("../../../Media/slide2_ice4.png")} alt="" />
            </div>
        </div>
    );
}

export default Slide2;
