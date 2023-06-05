import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";

import treandingData from "./treandingData";

// icon import
import {
  BsStarFill,
  BsStarHalf,
  BsBagHeartFill,
  BsFillHeartFill,
  BsEyeFill,
} from "react-icons/bs";

const TreandingProducts = () => {
  return (
    <div className="treandingProducts">
      <div className="treandingProducts__header">
        <span>Treanding Products</span>
      </div>

      <Swiper
        className="treandingProducts__container"
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            // spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            // spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            // spaceBetween: 20,
          },
          340: {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
        }}
      >
        {treandingData.map((item) => {
          return (
            <SwiperSlide className="treandingProducts__card">
              <div className="treandingProducts__card__img">
                <img src={item.image} alt="" />
              </div>

              <div className="shoppingCart__content">
                <BsFillHeartFill />
                <BsBagHeartFill />
                <BsEyeFill />
              </div>

              <div className="treandingProducts__card__content">
                <span className="treandingProducts__card__content__titleText">
                  {item.title}
                </span>
                <div className="treandingProducts__card__content__rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>

                <span className="treandingProducts__card__content__priceText">
                  $ {item.price}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TreandingProducts;
