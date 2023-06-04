import { BiFilterAlt } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../../common/Button";

const ShopMobileHead = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="shopHead">
      <input
        type="search"
        className="shopHead__input"
        placeholder="search..."
      />
      <span
        className="shopHead__filter"
        onClick={() => setShowFilters(!showFilters)}
      >
        <BiFilterAlt size={24} />
      </span>
      {showFilters && (
        <div className="mobileFilter">
          <span className="mobileFilter__cross" onClick={() => {
            setShowFilters(false);
          }}>
            <RxCross2 size={25} />
          </span >
          <Sidebar />
          <div className="mobileFilter__btns">
            <button className="reset__btn">Reset</button>
            <button className="done__btn">Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopMobileHead;
