import { ThemeContext } from "@emotion/react";
import React, { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const handleSwitchTheme = () => {
    setIsDark(!isDark);
  };

  const themeData = {
    isDark,
    handleSwitchTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
