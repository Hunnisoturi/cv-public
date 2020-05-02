import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import NavBar from './components/Navbar';

import logo from './assets/Logo.svg';
import rectangleLarge from './assets/RectangleLarge.svg';
import styles from './styles/app.module.css';

const App = () => (
  <div className={styles.app}>
    <span className={styles.rectangle}>
      <img alt="" src={rectangleLarge} />
    </span>
    <span className={styles.appHeader}>
      <span className={styles.logo}>
        <img alt="logo" src={logo} height={110} />
      </span>
      <NavBar />
    </span>
    <span className={styles.appFooter}>
      <footer>
        <Trans i18nKey="copyright" />
      </footer>
    </span>
  </div>
);

export default withTranslation()(App);
