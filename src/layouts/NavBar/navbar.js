import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './styles.css';

import logo from './../../assets/tangologo.svg'

const NavBar = () => (
  <div className="navBar">
    <div className="navContain">
      <div className="homeLogo">
        <Link to="/">
          <img className="navLogo" src={logo} alt="Tango Logo"/>
        </Link>
      </div>
      <span className="navItems">
        <a className="navItem" href="">Specials</a>
        <a className="navItem" href="">Favorites</a>
        <a className="navItem" href="">Contact</a>
      </span>
    </div>
  </div>
);

export default NavBar;
