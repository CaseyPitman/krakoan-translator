//App component

import React, { useState } from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Hooks
import { useDarkMode } from "../hooks/useDarkMode";

//Styling
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import { GlobalStyles } from "../styles/global";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <div className='app'>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
