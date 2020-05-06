import React from 'react';
import { Trans } from 'react-i18next';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as EduDot } from '../assets/Education.svg';

const styles = makeStyles({
  container: {
    marginTop: '150px',
  },
  dot: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Education = () => {
  const classes = styles();

  return (
    <Grid container direction="row" justify="center" className={classes.container}>
      <Grid item xs={6} className={classes.dot}>
        {/* // TODO: FIX BROKEN SVG */}
        <EduDot />
      </Grid>
      <Grid container direction="column" item xs={6} alignItems="center">
        <Grid container direction="column" item xs={6} justify="center">
          <Grid item>
            <Typography variant="h5">
              <Trans i18nKey="amk" />
            </Typography>
            <Typography variant="h6" color="secondary">
              <Trans i18nKey="amkPlaceAndTime" />
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" item xs={6} justify="center">
          <Grid item>
            <Typography variant="h5">
              <Trans i18nKey="amk" />
            </Typography>
            <Typography variant="h6" color="secondary">
              <Trans i18nKey="amkPlaceAndTime" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Education;
