import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <div className={`${className} mx-auto max-w-[1440px]`}>{children}</div>
  );
};

export default Container;
