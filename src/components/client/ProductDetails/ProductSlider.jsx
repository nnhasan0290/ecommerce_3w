import Slider from "react-slick";

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const ProductImgSlider = () => {
  return (
      <Slider {...settings}>
          <img
            src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg"
            alt=""
          />
          <img
            src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg"
            alt=""
          />
      </Slider>
  );
};

export default ProductImgSlider;
