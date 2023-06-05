import StarRatings from "react-star-ratings";
import TextLink from "../../common/TextLink";

const SingleProduct = () => {
  return (
    <div className="product">
      <img
        className="product__img"
        src="https://static-01.daraz.com.bd/p/ef61890f01aacb2a6ad8e03c483ced78.jpg"
        alt=""
      />
      <div className="product__content">
        <TextLink>Product title</TextLink>
        <span className="product__price">৳ 1500</span>
        <div className="product__discount">
          <span className="product__prev">৳ 2000</span>
          <span>36%</span>
        </div>
        <div className="product__rating">
          <StarRatings
            rating={3}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
          />
          <span>(19)</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
