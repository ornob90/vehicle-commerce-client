import React from "react";
import useTheme from "../../Hooks/useTheme";
import { useLocation } from "react-router-dom";

const Container = ({ className = "", children }) => {
  const { isDark } = useTheme();
  const { pathname } = useLocation();

  return (
    <div
      className={`${className} mx-auto max-w-[1440px] ${
        isDark && pathname === "/" ? "bg-[#121212] text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
