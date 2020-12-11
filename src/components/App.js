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



  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <div className='app'>
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
