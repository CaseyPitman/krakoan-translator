//NavBar component

import React, { useState, useEffect } from "react";

//Styles
import "../css/navBar.css";

const NavBar = props => {
  return (
    <div class='nav-bar'>
      <div class='nav-link-container'>
        <div className='nav-link active'>Home</div>
        <div className='nav-link inactive'>English to Krakoan</div>
        <div className='nav-link inactive'>Krakoan to English</div>
      </div>
    </div>
  );
};

export default NavBar;
