import React from "react";
import useTheme from "../../Hooks/useTheme";

const Container = ({ className = "", children }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${className} mx-auto max-w-[1440px] ${
        isDark ? "bg-[#121212] text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
