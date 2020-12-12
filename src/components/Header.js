//Header component

import React from "react";
import "@fortawesome/fontawesome-free/js/all.js";

const Header = props => {
  return (
    <div className='header'>
      <h1>Header</h1>
      <button onClick={e => props.toggleTheme()}>Theme</button>
      <i className='fas fa-sun icon'></i>
      <i className='fas fa-moon icon'></i>
    </div>
  );
};

export default Header;
