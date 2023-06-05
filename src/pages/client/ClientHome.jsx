import React from "react";
import Carousel from "../../components/client/carousel/Carousel";
import Wrapper from "../../components/common/Wrapper";

import offerBg1 from "../../assets/imgs/client/offerCardBg/banner-1.jpg";
import offerBg2 from "../../assets/imgs/client/offerCardBg/banner-3.jpg";

import Button from "../../components/common/Button";
import ShopByCategory from "../../components/client/shopByCategory/ShopByCategory";
import TreandingProducts from "../../components/client/treandingProducts/TreandingProducts";
import Footer from "../../components/common/Footer";

const ClientHome = () => {
  return (
    <div className="clientHome">
      <Carousel />

      <Wrapper>
        <div className="offerCardContainer">
          <div className="offerCard">
            <div className="offerCard__image">
              <img src={offerBg1} alt="" />
            </div>

            <div className="offerCard__content">
              <span>
                Fresh fruit,vegetable on <br /> our product
              </span>
              <Button>Shop Now</Button>
            </div>
          </div>

          <div className="offerCard">
            <div className="offerCard__image">
              <img src={offerBg2} alt="" />
            </div>

            <div className="offerCard__content">
              <span>
                Fresh fruit,vegetable on <br /> our product
              </span>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <ShopByCategory />
      </Wrapper>

      <Wrapper>
        <TreandingProducts />
      </Wrapper>

      <div className="dealOfTheDay">
        <div className="dealOfTheDay__container">
          <div className="dealOfTheDay__content">
            <span className="dealOfTheDay__content__about">
              We offer a hot deal offer every festival
            </span>
            <h3 className="dealOfTheDay__content__title">Deal of the day!</h3>

            <div className="dealOfTheDay__content__timer">
              <div className="dealOfTheDay__content__timer__item">
                <span className="timer__digit">00</span>
                <span className="timer__text">Days</span>
              </div>

              <div className="dealOfTheDay__content__timer__item">
                <span className="timer__digit">00</span>
                <span className="timer__text">Hours</span>
              </div>

              <div className="dealOfTheDay__content__timer__item">
                <span className="timer__digit">00</span>
                <span className="timer__text">Mins</span>
              </div>

              <div className="dealOfTheDay__content__timer__item">
                <span className="timer__digit">00</span>
                <span className="timer__text">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Wrapper>
        <TreandingProducts />
      </Wrapper>

      <Footer />
    </div>
  );
};

export default ClientHome;
