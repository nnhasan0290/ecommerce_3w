import TextLink from "../../common/TextLink";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className=" topbar__inner ec-container">
        <TextLink>SELL HERE</TextLink>
        <TextLink>LOGIN/SIGNUP</TextLink>
        <TextLink>LANGUAGE</TextLink>
      </div>
    </div>
  );
};

export default Topbar;
