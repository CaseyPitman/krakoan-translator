//NavBar component

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

//Styles
import "../css/navBar.css";

const NavBar = props => {
  const location = useLocation();
  console.log(location.pathname);
  const clickLink = () => {};

  return (
    <div className='nav-bar'>
      <div className='nav-link-container'>
        <NavLink exact to='/' className='nav-link' activeClassName='active'>
          Home
        </NavLink>
        <NavLink
          to='/english-to-krakoan'
          className='nav-link'
          activeClassName='active'>
          English to Krakoan
        </NavLink>
        <NavLink
          to='/krakoan-to-english'
          className='nav-link'
          activeClassName='active'>
          Krakoan to English
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
