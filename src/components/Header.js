//Header component

import React from "react";

const Header = props => {

   


  return (
    <div className='header'>
      <h1>Header</h1>
      <button onClick={(e) => props.toggleTheme()}>Theme</button>
    </div>
  );
};

export default Header;
