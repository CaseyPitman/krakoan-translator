//NavBar component

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//Styles
import "../css/navBar.css";

const NavBar = props => {

  const location = useLocation();
  console.log(location.pathname)
  const clickLink = () => {

  }

  return (
    <div className='nav-bar'>
      <div className='nav-link-container'>
        <Link to='/'>
          <div className='nav-link' onClick = {clickLink}>
            Home
          </div>
        </Link>
        <Link to='/english-to-krakoan'>
          <div className='nav-link' onClick = {clickLink}>
            English to Krakoan
          </div>
        </Link>
        <Link to='/krakoan-to-english'>
          <div className='nav-link' onClick = {clickLink}>
            Krakoan to English
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
