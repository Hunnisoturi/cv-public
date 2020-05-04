import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  footer: {
    display: 'flex',
    background: '#212121',
    color: '#ffffff',
    bottom: '0',
    position: 'fixed',
    width: '100%',
    height: '4rem',
    alignItems: 'center',
  },
});

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Typography variant="h6" align="center">
          <Trans i18nKey="copyright" />
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
