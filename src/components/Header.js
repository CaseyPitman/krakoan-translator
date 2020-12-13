//Header component

import React from "react";


import Toggle from "./Toggle";

const Header = props => {
  return (
    <div className='header'>
      <div className='header-top'></div>
      <h1 className = "headline">Header</h1>
      <Toggle toggleTheme={props.toggleTheme} theme={props.theme} className = 'toggle-button' />
    </div>
  );
};

export default Header;
