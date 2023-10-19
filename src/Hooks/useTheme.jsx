import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const useTheme = () => {
  const data = useContext(ThemeContext);

  return data;
};

export default useTheme;
