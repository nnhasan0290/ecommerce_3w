import { IoMdHome } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi2";
import Avatar from "../../common/Avatar";

const MobileHeader = () => {
  return (
    <div className="mobileHeader">
      <IoMdHome size={25} />
      <HiShoppingCart size={25} />
      <Avatar size={"sm"} />
    </div>
  );
};

export default MobileHeader
