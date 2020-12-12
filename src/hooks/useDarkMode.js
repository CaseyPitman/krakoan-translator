// Custom hook to handle switching between dark and light mode.

import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  //Toggles between dark and light theme
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");

    storedTheme && setTheme(storedTheme);
  }, []);

  return [theme, toggleTheme];
};
