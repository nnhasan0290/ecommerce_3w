import Topbar from "./Topbar";
import { BsSearch } from "react-icons/bs";
import Avatar from "../../common/Avatar";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <Topbar />
      <div className="mainHeader ">
        <div className="mainHeader__inner ec-container">
          <h2>Logo</h2>
          <div>category</div>
          <form action="" className="mainHeader__form">
            <input type="text" placeholder="search"/>
            <span>
              <BsSearch size={20} />
            </span>
          </form>
            <Avatar
              img={
                "https://th.bing.com/th?id=OIP.fiQB6mgdJo2MvIpYvlzTHwHaH2&w=242&h=257&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2"
              }
            />
        </div>
      </div>
      <MobileHeader/>
    </>
  );
};

export default Header;
