import { FcBusinessman } from "react-icons/fc";

const Avatar = ({ img, size, onClick }) => {
  return (
    <div onClick={onClick} className={`avatar ${size} `}>
      {!img ? <FcBusinessman size={45} /> : <img src={img} alt="img" />}
    </div>
  );
};

export default Avatar;
