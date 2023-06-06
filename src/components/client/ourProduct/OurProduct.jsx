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

import treandingData1 from "./treandingData";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const renderProductCards = () => {
    const blocks = [];

    for (let i = 0; i < treandingData1.length; i += 2) {
      // two row data
      const rowData = treandingData1.slice(i, i + 2); // 0, 2

      const block = (
        <SwiperSlide className="ourProductList__block" key={i}>
          {rowData?.slice(0, 1).map((item, index) => (
            <div className="ourProducts__card">
              <div className="ourProducts__card__img">
                <img src={item.image} alt="" />
              </div>

              <div className="shoppingCart__content">
                <BsFillHeartFill />
                <BsBagHeartFill />
                <BsEyeFill />
              </div>

              <div className="ourProducts__card__content">
                <span className="ourProducts__card__content__titleText">
                  {item.title}
                </span>
                <div className="ourProducts__card__content__rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>

                <span className="ourProducts__card__content__priceText">
                  $ {item.price}
                </span>
              </div>
            </div>
          ))}

          {rowData?.slice(1).map((item, index) => (
            <div className="ourProducts__card">
              <div className="ourProducts__card__img">
                <img src={item.image} alt="" />
              </div>

              <div className="shoppingCart__content">
                <BsFillHeartFill />
                <BsBagHeartFill />
                <BsEyeFill />
              </div>

              <div className="ourProducts__card__content">
                <span className="ourProducts__card__content__titleText">
                  {item.title}
                </span>
                <div className="ourProducts__card__content__rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>

                <span className="ourProducts__card__content__priceText">
                  $ {item.price}
                </span>
              </div>
            </div>
          ))}
        </SwiperSlide>
      );

      blocks.push(block);
    }

    return blocks;
  };

  return (
    <div className="ourProduct">
      <div className="ourProduct__header">
        <span>Our Products</span>
      </div>

      <Swiper
        className="ourProducts__container"
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        // loop={true}
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
            slidesPerView: 4,
            // spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          340: {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
        }}
      >
        {treandingData.length > 0 && renderProductCards()}
      </Swiper>
    </div>
  );
};

export default OurProduct;
