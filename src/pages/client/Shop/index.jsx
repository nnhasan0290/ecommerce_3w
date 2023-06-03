import Category from "../../../components/client/Shop/Category";
import Products from "../../../components/client/Shop/Products";
import Sidebar from "../../../components/client/Shop/Sidebar";

const Shop = () => {
  return (
    <div className="ec-container">
      {/* breadcrumb */}
      {/*category*/}
      <Category />
      <div className="shop__main">
        {/*sidebar*/}
        <Sidebar />
        <Products />
      </div>
      {/*Products*/}
    </div>
  );
};

export default Shop;
