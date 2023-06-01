import {
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import Slider from "react-slick";
import IconButton from "../../common/IconButton";
import TextLink from "../../common/TextLink"

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translate(101%,-50%)",
      }}
    >
      <IconButton icon={<BsChevronRight />} color={"secondary"} fullRounded />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translate(-101%,-50%)",
      }}
    >
      <IconButton icon={<BsChevronLeft />} color={"secondary"} fullRounded />
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const Category = () => {
  return (
    <Slider {...settings} className="slider">
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
        
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
      <div className="slider__single">
        <img src="https://static-01.daraz.com.bd/p/c54fca7fbaf5ff2def40ce7a48edeaad.jpg" alt="" />
        <TextLink>Name</TextLink>
      </div>
    
      
    </Slider>
  );
};

export default Category;
