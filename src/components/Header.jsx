import React from 'react';
import { Toolbar, Button, Box, AppBar, Typography, Container } from '@material-ui/core';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Constants } from '../utils/constants';
import { isFinnish } from '../utils/utils';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const styles = makeStyles({
  appbar: {
    background: '#F5F5F5',
    opacity: '98%',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
    flexGrow: '1',
  },
  navi: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: '12px',
    marginRight: '12px',
    fontWeight: 'bold',
  },
});

const Header = () => {
  const classes = styles();
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const { languages: { en, fi } } = Constants;

    i18n.changeLanguage(isFinnish(i18n.language) ? en : fi);
  };

  return (
    <header>
      <AppBar elevation={0} className={classes.appbar}>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar}>
            <Logo height={100} />
            <Box className={classes.navi} component="nav">
              <Button size="large" className={classes.button}>
                <Typography component="h6">
                  <Box fontWeight={700}>
                    <Trans i18nKey="home" />
                  </Box>
                </Typography>
              </Button>
              <Button size="large" className={classes.button}>
                <Typography component="h6">
                  <Box fontWeight={700}>
                    <Trans i18nKey="portfolio" />
                  </Box>
                </Typography>
              </Button>
              <Button size="large" className={classes.button}>
                <Typography component="h6">
                  <Box fontWeight={700}>
                    <Trans i18nKey="contact" />
                  </Box>
                </Typography>
              </Button>
              <Button
                size="large"
                className={classes.button}
                onClick={changeLanguage}
              >
                <Typography component="h6">
                  <Box fontWeight={700}>
                    <Trans i18nKey="language" />
                  </Box>
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
