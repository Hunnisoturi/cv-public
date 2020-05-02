import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Constants } from '../utils/constants';
import { isFinnish } from '../utils/utils';
import styles from '../styles/app.module.css';

const useStyles = makeStyles(({
  change: {
    color: '#EA6227',
    borderColor: '#EA6227',
  },
}));

const Footer = () => {
  const { i18n } = useTranslation();

  const classes = useStyles();

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
          className={classes.change}
          onClick={changeLanguage}
        >
          <Trans i18nKey="language" />
        </Button>
      </span>
    </footer>
  );
};

export default Footer;
