import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";

import shopByCatData from "./shopByCatData";

const ShopByCategory = () => {
  return (
    <div className="shopByCategory">
      <div className="shopByCategory__header">
        <span>Shop By Category</span>
      </div>

      <Swiper
        className="shopByCategory__Container"
        slidesPerView={6}
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
        {shopByCatData.map((item, index) => {
          return (
            <SwiperSlide className="shopByCategory__card">
              <div className="shopByCategory__card__img">
                <img src={item.image} alt="" />
              </div>

              <div className="shopByCategory__card__layer">
                <span>{item.catName}</span>
              </div>

              <div className="shopByCategory__card__text">{item.itemCount}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ShopByCategory;
