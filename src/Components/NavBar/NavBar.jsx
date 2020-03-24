import React, { useEffect } from "react";
import "./NavBar.css";
import { useRef } from "react";

const NavBar = props => {
  const p0ref = useRef();
  const p1ref = useRef();
  const p2ref = useRef();

  useEffect(() => {
    const slides_wrapper = document.getElementById("slides_wrapper");
    const p0 = p0ref.current;
    const p1 = p1ref.current;
    const p2 = p2ref.current;
    let touchStartY;
    let touchEndY;
    let currentSlide = 0;

    const Update = currentSlide => {
      slides_wrapper.style.transform = `translateY(-${currentSlide * 768}px)`;
      p0.style.backgroundColor = "white";
      p1.style.backgroundColor = "white";
      p2.style.backgroundColor = "white";

      if (currentSlide === 0) {
        document.getElementById("scroll_down").style.opacity = 1;
        p0ref.current.style.backgroundColor = "#f17900";
        p1ref.current.style.backgroundColor = "#fff";
      } else if (currentSlide === 2) {
        document.getElementById("scroll_down").style.display = "none";
        p0ref.current.style.backgroundColor = "#fff";
        p1ref.current.style.backgroundColor = "#fff";
        p2ref.current.style.backgroundColor = "#f17900";
      } else if (currentSlide === 1) {
        document.getElementById("scroll_down").style.display = "block";
        document.getElementById("scroll_down").style.opacity = 0;
        p0ref.current.style.backgroundColor = "#fff";
        p1ref.current.style.backgroundColor = "#f17900";
        p2ref.current.style.backgroundColor = "#fff";
      }
    };

    window.addEventListener("touchstart", e => {
      touchStartY = e.touches[0].clientY;
    });

    window.addEventListener("touchend", e => {
      if (
        e.changedTouches[0].target ===
        document.getElementsByClassName("DefaultHandle_handle")[0] // не трогаем свайп на слайдере
      ) {
        return;
      }

      touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50 && currentSlide <= 1) {
        currentSlide += 1;
        Update(currentSlide);
      }
      if (touchStartY - touchEndY < -50 && currentSlide >= 1) {
        currentSlide -= 1;
        Update(currentSlide);
      }
    });
  }, []);

  return (
    <div className="navbar">
      <div className="point0 bar" ref={p0ref} ></div>
      <div className="point1 bar" ref={p1ref} ></div>
      <div className="point2 bar" ref={p2ref} ></div>
    </div>
  );
};

export default NavBar;
