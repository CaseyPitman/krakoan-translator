//NavBar component

import React, { useState, useEffect } from "react";

//Styles
import "../css/navBar.css";

const NavBar = props => {
  return (
    <div class='nav-bar'>
      <div class='nav-link-container'>
        <div className='nav-bar-home nav-link active'>Home</div>
        <div className='nav-bar-e-to-k nav-link'>English to Krakoan</div>
        <div className='nav-bar-k-to-e nav-link'>Krakoan to English</div>
      </div>
    </div>
  );
};

export default NavBar;
