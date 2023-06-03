import { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useOutsideClickHandler from "../../utils/useClickOutside";
const Select = () => {
  const [showOpts, setShowOpts] = useState(false);
  const [value, setValue] = useState();
  const ref = useRef(null);
  useOutsideClickHandler(ref, () => setShowOpts(false));
  return (
    <div ref={ref} className="select">
      <div className="select__input" onClick={() => setShowOpts(!showOpts)}>
        <input type="text" readOnly value={"First Item"} />
        <span className={`select__icon ${showOpts && "turnup"}`}>
          <BsChevronDown />
        </span>
      </div>
      {showOpts && (
        <div className="select__items">
          <li className="select__single">First Item</li>
          <li className="select__single">Second Item</li>
          <li className="select__single">Third Item</li>
        </div>
      )}
    </div>
  );
};

export default Select;
