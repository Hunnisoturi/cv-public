import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { Constants } from '../utils/constants';
import { isFinnish } from '../utils/utils';
import styles from '../styles/app.module.css';

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const { languages: { en, fi } } = Constants;

    i18n.changeLanguage(isFinnish(i18n.language) ? en : fi);
  };

  return (
    <footer className={styles.appFooter}>
      <span className={styles.copyright}>
        <Trans i18nKey="copyright" />
      </span>
      <span className={styles.changeLanguage}>
        <Button
          variant="outlined"
          onClick={changeLanguage}
        >
          <Trans i18nKey="language" />
        </Button>
      </span>
    </footer>
  );
};

export default Footer;
