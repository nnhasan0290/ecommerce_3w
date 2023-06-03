import Select from "../../common/Select";
import SingleProduct from "./SingleProduct";
import Divider from "../../common/Divider";
import TextLink from "../../common/TextLink";
import Chip from "../../common/Chip";

const Products = () => {
  return (
    <div>
      <div>
        <div className="products__top__filter">
          <span>1547 items found here</span>
          <div className="select__area">
            <span>Sort By:</span>
            <Select />
          </div>
        </div>
        <div className="filtered_by">
          <span>Filtered By:</span>
          <Chip>chip</Chip>
          <span className="filtered_by_clear">Clear All</span>
        </div>
      </div>
      <Divider />
      <div className="product__wrap">
        {Array(20)
          .fill(0)
          .map((each) => (
            <SingleProduct />
          ))}
      </div>
    </div>
  );
};

export default Products;
