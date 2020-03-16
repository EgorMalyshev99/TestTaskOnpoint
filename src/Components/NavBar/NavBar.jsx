import React, { useEffect } from "react";
import "./NavBar.css"

const NavBar = props => {

    useEffect(() => {
        const slides_wrapper = document.querySelector('.slides_wrapper');
        const p0 = document.querySelector('.point0');
        const p1 = document.querySelector('.point1');
        const p2 = document.querySelector('.point2');
        let touchStartY;
        let touchEndY;
        let currentSlide = 0;

        const Update = (currentSlide) => {
            slides_wrapper.style.transform = `translateY(-${currentSlide * 768}px)`;
            p0.style.backgroundColor = 'white';
            p1.style.backgroundColor = 'white';
            p2.style.backgroundColor = 'white';

            document.querySelector('.point' + currentSlide).style.backgroundColor = '#f17900';

            if (currentSlide === 0) {
                document.getElementById('scroll_down').style.opacity = 1;
            } else {
                document.getElementById('scroll_down').style.opacity = 0;
            }
        };

        window.addEventListener('touchstart', e => {
            touchStartY = e.touches[0].clientY;
        });

        window.addEventListener('touchend', e => {
            touchEndY = e.changedTouches[0].clientY;
            if (touchStartY - touchEndY > 50 && currentSlide <= 1) {
                currentSlide += 1;
                Update(currentSlide);
            }
            if (touchStartY - touchEndY < -50 && currentSlide >= 1) {
                currentSlide -= 1;
                Update(currentSlide);
            }
            console.log(currentSlide);
        });
    }, []
    );
    
    return (
        <div className="navbar">
            <div className="point0 bar"></div>
            <div className="point1 bar"></div>
            <div className="point2 bar"></div>
        </div>
    );
}

export default NavBar;
