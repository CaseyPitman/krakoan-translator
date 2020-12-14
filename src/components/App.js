//App component

import React from "react";
import {HashRouter as Router, Route} from 'react-router-dom';

//Components
import Header from "./Header";
import NavBar from "./NavBar"
import Footer from "./Footer";

//Hooks
import { useDarkMode } from "../hooks/useDarkMode";

//Styling
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/themes";
import { GlobalStyles } from "../themes/global";
import "../css/global.css";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  //check to see if component has mounted
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <div className='app'>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <NavBar/>
        <div className = 'page'></div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
