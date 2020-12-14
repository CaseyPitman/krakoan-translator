//NavBar component

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Styles
import "../css/navBar.css";

const NavBar = props => {
  return (
    <div className='nav-bar'>
      <div className='nav-link-container'>
        <Link to='/'>
          <div className='nav-link'>Home</div>
        </Link>
        <Link to='/english-to-krakoan'>
          <div className='nav-link'>English to Krakoan</div>
        </Link>
        <Link to='/krakoan-to-english'>
          <div className='nav-link'>Krakoan to English</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
