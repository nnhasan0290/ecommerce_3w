const Divider = ({ children }) => {
  return (
    <div className={`divider ${children && "has__children"}`}>
      <hr className="divider__border" />
      {children && (
        <>
          <span>{children}</span>
          <hr className="divider__border" />
        </>
      )}
    </div>
  );
};

export default Divider;
