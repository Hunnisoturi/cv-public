import React from 'react';
import NavBar from './Navbar';
import styles from '../styles/app.module.css';

import logo from '../assets/Logo.svg';

const Header = () => (
  <header className={styles.appHeader}>
    <span className={styles.logo}>
      <img alt="logo" src={logo} height={110} />
    </span>
    <NavBar />
  </header>
);

export default Header;
