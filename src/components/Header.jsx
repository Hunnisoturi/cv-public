import React from 'react';
import { Toolbar, Button, Box, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from 'react-i18next';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as SmallPipe } from '../assets/Pipe.svg';

const styles = makeStyles({
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
  },
});

const Header = () => {
  const classes = styles();
  return (
    <header>
      <AppBar color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Logo height={100} />
          <Box className={classes.navi} component="nav">
            <SmallPipe className={classes.button} />
            <Button size="large" className={classes.button}>
              <Trans i18nKey="home" />
            </Button>
            <Button size="large" className={classes.button}>
              <Trans i18nKey="portfolio" />
            </Button>
            <Button size="large" className={classes.button}>
              <Trans i18nKey="contact" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
