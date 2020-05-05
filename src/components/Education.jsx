import React from 'react';
import { Trans } from 'react-i18next';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  box: {
    marginTop: '100px',
    color: '#ffffff',
    paper: theme.palette.secondary.main,
  },
  gridContainer: {
    padding: '32px',
  },
}));

const Education = () => {
  const classes = styles();

  return (
    <Box bgcolor="secondary.main" className={classes.box}>
      <Grid container className={classes.gridContainer} direction="column" spacing={4}>
        <Grid item>
          <Typography color="textPrimary" variant="h3">
            <Trans i18nKey="education" />
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Trans i18nKey="selfDescription" />
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Trans i18nKey="selfDescription" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
