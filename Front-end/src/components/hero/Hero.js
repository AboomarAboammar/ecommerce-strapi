import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Container } from "react-bootstrap";

import topRightImg from "../../images/banner-17.jpg";
import buttomRightImg from "../../images/banner-16.jpg";

import { FaArrowRight } from "react-icons/fa";

import HeroSwiper from "./Swiper/Swiper";
import HeroIcons from "./HeroIcons";
function Hero() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <div className="hero-container">
        <HeroSwiper />

        {width <= 1000 ? (
          ""
        ) : (
          <div className="hero-right">
            <div className="right-main">
              <img src={topRightImg} alt="" className="img-right" />
              <div className="right-top-text">
                <p>new arrivals</p>
                <p>summer</p>
                <p>sale 20% of</p>
                <a href="#">
                  shop now <FaArrowRight style={{ marginLeft: "10px" }} />{" "}
                </a>
              </div>
            </div>
            <div className="right-main">
              <img src={buttomRightImg} alt="" className="img-right" />
              <div className="right-top-text">
                <p>gaming 4k</p>
                <p>desktops & </p>
                <p>laptops</p>
                <a href="#">
                  shop now <FaArrowRight style={{ marginLeft: "10px" }} />{" "}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <HeroIcons />
    </Container>
  );
}

export default Hero;
