import React from "react";
import Carousel from "../../components/client/carousel/Carousel";
import Wrapper from "../../components/common/Wrapper";

import offerBg1 from "../../assets/imgs/client/offerCardBg/banner-1.jpg";
import offerBg2 from "../../assets/imgs/client/offerCardBg/banner-3.jpg";

import Button from "../../components/common/Button";
import ShopByCategory from "../../components/client/shopByCategory/ShopByCategory";

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
    </div>
  );
};

export default ClientHome;
