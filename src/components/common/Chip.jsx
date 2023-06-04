import { RxCross1 } from "react-icons/rx";

const Chip = ({ children }) => {
  return (
    <span className="chip">
      {children}
      <RxCross1 size={11} />
    </span>
  );
};

export default Chip;
