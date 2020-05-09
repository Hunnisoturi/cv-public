import React from 'react';
import { Toolbar, Button, Box, AppBar, Typography, Container } from '@material-ui/core';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';
import { Constants } from '../utils/constants';
import { isFinnish } from '../utils/utils';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const styles = makeStyles(theme => ({
  appbar: {
    background: '#F5F5F5',
    opacity: '98%',
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      top: 'auto',
      bottom: '0',
      opacity: '100%',
      background: theme.palette.primary.main,
      height: '70px',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  navi: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: '12px',
    marginRight: '12px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
      marginRight: '0px',
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = styles();
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const { languages: { en, fi } } = Constants;

    i18n.changeLanguage(isFinnish(i18n.language) ? en : fi);
  };

  return (
    <Container maxWidth="xl" component="header">
      <AppBar elevation={0} className={classes.appbar}>
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} disableGutters>
            <Logo height={100} className={classes.logo} />
            <Box className={classes.navi} component="nav">
              <Link smooth to="/#home" className={classes.link}>
                <Button className={classes.button}>
                  <Typography component="h6">
                    <Box fontWeight={700}>
                      <Trans i18nKey="home" />
                    </Box>
                  </Typography>
                </Button>
              </Link>
              <Link smooth to="/#projects" className={classes.link}>
                <Button className={classes.button}>
                  <Typography component="h6">
                    <Box fontWeight={700}>
                      <Trans i18nKey="projects" />
                    </Box>
                  </Typography>
                </Button>
              </Link>
              <Link smooth to="/#contact" className={classes.link}>
                <Button className={classes.button}>
                  <Typography component="h6">
                    <Box fontWeight={700}>
                      <Trans i18nKey="contact" />
                    </Box>
                  </Typography>
                </Button>
              </Link>
              <Button
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
    </Container>
  );
};

export default Header;
