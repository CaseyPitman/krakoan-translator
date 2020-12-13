//Header component

import React, { useState, useEffect } from "react";

//Components
import Toggle from "./Toggle";

//Assets

import darkLogo from "../images/x_logo_dark.jpg";
import lightLogo from "../images/x_logo_light.jpg";

//Styles
import "../css/header.css";

const Header = ({ theme, toggleTheme }) => {
  const [logo, setLogo] = useState(lightLogo);

  useEffect(() => {
    const curLogo = theme === "light" ? lightLogo : darkLogo;
    setLogo(curLogo);
  }, [theme]);

  return (
    <div className='header'>
      <div className='header-top'></div>
      <div className='header-content'>
        <img className='x-logo' src={logo} alt='X logo.' />
        <p className='info-tag intro-tag'>[krakoan_native]..[000]</p>
        <h1 className='headline'>Krakoan Translator</h1>
        <div className='header-info'>
          <p className='info-tag'>[krakoan_init]....[exe]</p>
          <div className='display-mode-switch-container'>
            <Toggle
              toggleTheme={toggleTheme}
              theme={theme}
              className='toggle-button'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
