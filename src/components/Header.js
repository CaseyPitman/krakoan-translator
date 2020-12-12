//Header component

import React from "react";
import "@fortawesome/fontawesome-free/js/all.js";

import Toggle from "./Toggle";

const Header = props => {
  return (
    <div className='header'>
      <h1>Header</h1>
      <Toggle toggleTheme={props.toggleTheme} theme={props.theme} />
    </div>
  );
};

export default Header;
