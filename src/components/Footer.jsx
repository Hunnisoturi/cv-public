import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Constants } from '../utils/constants';
import { isFinnish } from '../utils/utils';

const styles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    background: '#212121',
    color: '#ffffff',
    bottom: '0',
    position: 'fixed',
    width: '100%',
    height: '5rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Footer = () => {
  const classes = styles();
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const { languages: { en, fi } } = Constants;

    i18n.changeLanguage(isFinnish(i18n.language) ? en : fi);
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h6" align="center">
          <Trans i18nKey="copyright" />
        </Typography>
        <Button
          variant="outlined"
          onClick={changeLanguage}
        >
          <Trans i18nKey="language" />
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;
