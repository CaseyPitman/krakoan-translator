//Header component

import React from "react";

import Toggle from "./Toggle";

const Header = props => {
  return (
    <div className='header'>
      <div className='header-top'></div>
      <div className='header-contnet'>
        <h1 className='headline'>Krakoan Translator</h1>
        <div className='header-info'>
          <p className='info-tag'>[krakoan_init]....[exe]</p>
          <div className='display-mode-switch-container'>
            <Toggle
              toggleTheme={props.toggleTheme}
              theme={props.theme}
              className='toggle-button'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
