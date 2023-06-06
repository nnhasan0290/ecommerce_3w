import ImageMagnify from "../../../components/client/ProductDetails/Magnifyimg";
import ProductImgSlider from "../../../components/client/ProductDetails/ProductSlider";

const ProductDetails = () => {
  return (
    <div className="productDetails ">
      <div className="productDetails__container ec-container">
        <div className="productDetails__img">
          <ImageMagnify />
        </div>
        <div>Product Details</div>
      </div>
    </div>
  );
};

export default ProductDetails;
