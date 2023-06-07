import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const DarkThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkInfo = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={darkInfo}>{children}</ThemeContext.Provider>
  );
};

export default DarkThemeProvider;
