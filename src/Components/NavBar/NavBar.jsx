import React from "react";
import s from "./NavBar.module.css";

const NavBar = props => {
    return(
        <div>
            <div className={s.point1}></div>
            <div className={s.point2}></div>
            <div className={s.point3}></div>
        </div>
    );
}

export default NavBar;