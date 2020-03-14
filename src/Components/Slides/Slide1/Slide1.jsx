import React from "react";
import s from "./Slide1.module.css";

const Slide1 = props => {
    return (
        <div>
            <div className={s.slide1_head}>
                Всегда ли цели терапии СД2 на поверхности?
            </div>
            <div className={s.point1}>
                Цель по HbA1c
            </div>
            <div className={s.point2}>
                Гипогликемия
            </div>
            <div className={s.point3}>
                Осложнения СД
            </div>
            <div className={s.point4}>
                СС риски
            </div>
        </div>
    );
}

export default Slide1;
