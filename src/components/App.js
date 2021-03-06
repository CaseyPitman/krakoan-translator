//App component

import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//Components
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import EnglishTranslate from "./EnglishTranslate";
import KrakoanTranslate from "./KrakoanTranslate";

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

      <Router>
        <div className='app'>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <NavBar />
          <Route path = '/' exact component = {Home}/>
          <Route path = '/english-to-krakoan' component = {EnglishTranslate}/>
          <Route path = '/krakoan-to-english' component = {KrakoanTranslate}/>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
