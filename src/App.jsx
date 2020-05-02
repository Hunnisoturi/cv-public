import React from 'react';
import { withTranslation } from 'react-i18next';
import NavBar from './components/Navbar';

import logo from './assets/Logo.svg';
import styles from './styles/app.module.css';

const App = () => (
  <div className={styles.app}>
    <span className={styles.appHeader}>
      <span className={styles.logo}>
        <img alt="logo" src={logo} height={110} />
      </span>
      <NavBar />
    </span>
  </div>
);

export default withTranslation()(App);
