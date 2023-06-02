import TextLink from "../../common/TextLink";
import Heading from "../../common/Heading";
import Input from "../../common/Input";
import StarRatings from "react-star-ratings";
import { BsPlay } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import Divider from "../../common/Divider";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__each">
        <Heading sm>Categories</Heading>
        <div className="sidebar__each__items">
          <TextLink gray>first category</TextLink>
          <TextLink gray>first category</TextLink>
        </div>
      </div>
      <Divider></Divider>
      {/* location */}
      <div className="sidebar__each">
        <Heading sm>Locations</Heading>
        <div className="sidebar__each__items">
          <div className="each__location">
            <input type="checkbox" name="" id="" />
            <span>Dhaka</span>
          </div>
          <div className="each__location">
            <input type="checkbox" name="" id="" />
            <span>Chittagong</span>
          </div>
        </div>
      </div>
       <Divider></Divider>
      {/* rating */}
      <div className="sidebar__each">
        <Heading sm>Rating</Heading>
        <div className="sidebar__each__items">
          <StarRatings
            rating={5}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
          />
          <StarRatings
            rating={4}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
          />
          <StarRatings
            rating={3}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
          />
        </div>
      </div>
      <Divider></Divider>
      <div className="sidebar__each">
        <Heading sm>Price</Heading>
        <div className="sidebar__price__items">
          <div className="sidebar__price">
            <Input type={"number"} />
            <span>-</span>
            <Input type={"number"} />
          </div>
          <IconButton icon={<BsPlay size={22} />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
