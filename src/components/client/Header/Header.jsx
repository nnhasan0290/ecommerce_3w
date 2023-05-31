import Topbar from "./Topbar";
import { BsSearch } from "react-icons/bs";
import Avatar from "../../common/Avatar";
import MobileHeader from "./MobileHeader";
import Dropdown from "../../common/Dropdown";
import { HiShoppingCart } from "react-icons/hi2";
import { useRef, useState } from "react";
import useOutsideClickHandler from "../../../utils/useClickOutside";

const Header = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClickHandler(dropdownRef, () => setShowUserDetails(false));

  return (
    <>
      <Topbar />
      <div className="mainHeader ">
        <div className="mainHeader__inner ec-container">
          <h2>Logo</h2>
          <div>category</div>
          <form action="" className="mainHeader__form">
            <input type="text" placeholder="search" />
            <span>
              <BsSearch size={20} />
            </span>
          </form>
          <div className="mainHeader__cart">
            <HiShoppingCart size={32} />
            <span className="mainHeader__cart__badge">12</span>
          </div>
          <div className="mainHeader_user" ref={dropdownRef}>
            <Avatar
              onClick={() => setShowUserDetails(!showUserDetails)}
              img={
                "https://th.bing.com/th?id=OIP.fiQB6mgdJo2MvIpYvlzTHwHaH2&w=242&h=257&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2"
              }
            />
            {showUserDetails && (
              <Dropdown>
                <div className="mainHeader__dropdown">
                  <div>Manage Account</div>
                  <div>Logout</div>
                </div>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
