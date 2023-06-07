import { useContext, useEffect } from "react";
import { ThemeContext } from "../Provider/DarkThemeProvider";

export const useDark = () => {
  const { dark } = useContext(ThemeContext);
  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (dark) {
      htmlElement.setAttribute("data-theme", "dark");
      htmlElement.classList.add("dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
      htmlElement.classList.remove("dark");
    }
  }, [dark]);

  return useContext(ThemeContext);
};
