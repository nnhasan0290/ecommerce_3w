import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="contentWrapper">{children}</div>
    </div>
  );
};

export default Wrapper;
