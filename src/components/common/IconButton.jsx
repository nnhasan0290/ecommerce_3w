
const IconButton = ({icon, color, onClick, fullRounded}) => {
  return (
    <div onClick={onClick} className={`iconButton ${color ? color : "primary"} ${fullRounded && "fullRonded"}`}>
        {icon}
    </div>
  );
};

export default IconButton;
