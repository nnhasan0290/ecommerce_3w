
const IconButton = ({icon, color}) => {
  return (
    <div className={`iconButton ${color ? color : "primary"}`}>
        {icon}
    </div>
  );
};

export default IconButton;
