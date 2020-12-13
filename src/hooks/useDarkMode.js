// Custom hook to handle switching between dark and light mode.

import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  //Set mode in local storage and in state
  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  //Toggles between dark and light theme
  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  //Stores selection in localStorage
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setMode(storedTheme);
    } else {
      setMode("light");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
