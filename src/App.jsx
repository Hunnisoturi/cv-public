import React from 'react';
import { Trans, withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

import rectangleLarge from './assets/RectangleLarge.svg';
import styles from './styles/app.module.css';

const App = () => (
  <div className={styles.app}>
    <span className={styles.rectangle}>
      <img alt="" src={rectangleLarge} />
    </span>
    <Header />
    <span className={styles.appBody}>
      <span className={styles.headline}>
        <Trans i18nKey="headline" />
      </span>
    </span>
    <Footer />
  </div>
);

export default withTranslation()(App);
