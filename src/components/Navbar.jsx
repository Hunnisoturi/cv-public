import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';

const Navbar = () => (
  <span className="">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Trans i18nKey="appbar" />
        </Typography>
      </Toolbar>
    </AppBar>
  </span>
);

export default Navbar;
