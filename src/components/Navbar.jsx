import React from 'react';
import { Trans } from 'react-i18next';
import styles from '../styles/navbar.module.css';

import pipe from '../assets/Pipe.svg';

const Navbar = () => (
  <span className={styles.menu}>
    <span>
      <img alt="" src={pipe} height={65} />
    </span>
    <span>
      <Trans i18nKey="home" />
    </span>
    <span>
      <Trans i18nKey="portfolio" />
    </span>
    <span>
      <Trans i18nKey="contact" />
    </span>
  </span>
);

export default Navbar;
