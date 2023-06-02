import React from "react";
import "../../../assets/styles/components/_index.scss";

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";
import carousalData from "./data";

const Carousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="carousal">
      <Swiper
        className="mySwiper"
        pagination={pagination}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {carousalData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousal__item">
              <img src={item.image} alt={item.title} />
              <div className="carousal__item__titleAndButton">
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className="carousel__itemTitelText">
                    <span>{item.sortText}</span>
                    <h1>{item.title}</h1>
                    <h1>{item.title2}</h1>
                  </div>
                </motion.div>
                <div className="carousal__item__button">
                  <button>{item.buttonText}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
