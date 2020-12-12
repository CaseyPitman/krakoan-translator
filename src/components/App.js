//App component

import React, { useState } from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Styling
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import { GlobalStyles } from "../styles/global";

const App = () => {
  const [theme, setTheme] = useState("light");

  //Toggles between dark and light theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className='app'>
        <Header toggleTheme={toggleTheme} theme = {theme} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
