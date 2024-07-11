import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { Navigation } from "swiper/modules";
import swiperImg1 from "../../../images/banner-15.jpg";
import swiperImg2 from "../../../images/banner-25.jpg";
import { Button } from "react-bootstrap";

export default function HeroSwiper() {
  const mySwiper = [
    { text: "men", img: swiperImg1 },
    { text: "woman", img: swiperImg2 },
  ];
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {mySwiper.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <img className="slider-image" src={item.img} alt="" />
              <div className="slider-text">
                <h3>life style collection</h3>
                <h1>{item.text}</h1>
                <h3>
                  sale up to <span>30% off</span>
                </h3>
                <span>get shopping free on orders over $99.00</span>
                <Button className="shop-now3">shop now</Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
