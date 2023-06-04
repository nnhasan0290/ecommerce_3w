import Category from "../../../components/client/Shop/Category";
import Products from "../../../components/client/Shop/Products";
import ShopMobileHead from "../../../components/client/Shop/ShopMobileHead";
import Sidebar from "../../../components/client/Shop/Sidebar";

const Shop = () => {
  return (
    <>
      <ShopMobileHead />
      <div className="ec-container">
        {/* breadcrumb */}
        {/*category*/}
        <Category />
        <div className="shop__main">
          {/*sidebar*/}
          <div className="sidebar__wrap">
            <Sidebar />
          </div>
          <Products />
        </div>
        {/*Products*/}
      </div>
    </>
  );
};

export default Shop;
