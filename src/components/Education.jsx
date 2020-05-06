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
    overflow: 'visible',
  },
});

const Education = () => {
  const classes = styles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        {/* // TODO: FIX BROKEN SVG */}
        <EduDot className={classes.dot} />
      </Grid>
      <Grid container direction="column" item xs={6} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h5">
            <Trans i18nKey="amk" />
          </Typography>
          <Typography variant="h6" color="secondary">
            <Trans i18nKey="amkPlaceAndTime" />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">
            <Trans i18nKey="amk" />
          </Typography>
          <Typography variant="h6" color="secondary">
            <Trans i18nKey="amkPlaceAndTime" />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Education;
