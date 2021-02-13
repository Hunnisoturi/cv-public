import React, { useState } from 'react';
import { Toolbar, Button, Box, AppBar, Typography, Container, IconButton, Drawer } from '@material-ui/core';
import { Trans, useTranslation } from 'react-i18next';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import { Constants } from '../utils/constants';
import { isFinnish } from '../utils/utils';
import MenuIcon from '@material-ui/icons/Menu';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const styles = makeStyles(theme => ({
  appbar: {
    width: '100%',
    background: '#F5F5F5',
    opacity: '98%',
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      top: '0',
      bottom: 'auto',
      opacity: '100%',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
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
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: '30px',
    }
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
  mobileLogo: {
    width: '50px',
    height: '50px',
    marginLeft: '12px',
  },
  buttonMobile: {
    width: '250px',
    marginBottom: '30px',
  }
}));

const Header = () => {
  const classes = styles();
  const { i18n } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeLanguage = () => {
    const { languages: { en, fi } } = Constants;

    i18n.changeLanguage(isFinnish(i18n.language) ? en : fi);
  };

  return isMobile ? (
    <Container maxWidth="xl" component="header">
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Logo className={classes.mobileLogo} />
          <IconButton color="primary" onClick={handleOpen}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={handleClose} className={classes.drawer}>
            <Box className={classes.navi} component="nav">
                <Link smooth to="/#home" className={classes.link}>
                  <Button className={classes.buttonMobile} onClick={handleClose}>
                    <Typography component="h6">
                      <Box fontWeight={700}>
                        <Trans i18nKey="home" />
                      </Box>
                    </Typography>
                  </Button>
                </Link>
                <Link smooth to="/#projects" className={classes.link}>
                  <Button className={classes.buttonMobile} onClick={handleClose}>
                    <Typography component="h6">
                      <Box fontWeight={700}>
                        <Trans i18nKey="projects" />
                      </Box>
                    </Typography>
                  </Button>
                </Link>
                <Link smooth to="/#contact" className={classes.link}>
                  <Button className={classes.buttonMobile} onClick={handleClose}>
                    <Typography component="h6">
                      <Box fontWeight={700}>
                        <Trans i18nKey="contact" />
                      </Box>
                    </Typography>
                  </Button>
                </Link>
                <Button
                  className={classes.buttonMobile}
                  onClick={() => {changeLanguage(); handleClose();}}
                >
                  <Typography component="h6">
                    <Box fontWeight={700}>
                      <Trans i18nKey="language" />
                    </Box>
                  </Typography>
                </Button>
              </Box>
          </Drawer>
        </Toolbar> 
      </AppBar>
    </Container>
  ) : (
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
