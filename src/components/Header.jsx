import React from 'react';
import { Toolbar, Button, Box, AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from 'react-i18next';

import { ReactComponent as Logo } from '../assets/Logo.svg';

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
            <Button size="large" className={classes.button}>
              <Typography>
                <Trans i18nKey="home" />
              </Typography>
            </Button>
            <Button size="large" className={classes.button}>
              <Typography>
                <Trans i18nKey="portfolio" />
              </Typography>
            </Button>
            <Button size="large" className={classes.button}>
              <Typography>
                <Trans i18nKey="contact" />
              </Typography>
            </Button>
            <Button size="large" className={classes.button}>
              <Typography>
                <Trans i18nKey="language" />
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
