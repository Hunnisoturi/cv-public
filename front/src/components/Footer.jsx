import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    background: '#F5F5F5',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '30px',
  },
});

const Footer = () => {
  const classes = styles();

  return (
    <Container component="footer" maxWidth="xl" className={classes.footer}>
      <Container maxWidth="xl" className={classes.container}>
        <Typography variant="h5">
          <Trans i18nKey="footerMsg" />
        </Typography>
        <Typography variant="h6" color="secondary">
          <Trans i18nKey="copyright" />
        </Typography>
      </Container>
    </Container>
  );
};

export default Footer;
