import React from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const classes = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
});

const Header = () => (
  <Toolbar className={classes.toolbar}>
    <Logo />
  </Toolbar>
);

export default Header;
