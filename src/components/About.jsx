import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Grid, Breadcrumbs, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import portrait from '../assets/portrait.jpg';

const styles = makeStyles(theme => ({
  container: {
    paddingTop: '150px',
  },
  gridContainer: {
    padding: '32px',
    color: '#ffffff',
  },
  // paper: {
  //   width: '30%',
  // },
}));

const About = () => {
  const classes = styles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container className={classes.gridContainer} direction="column" spacing={4}>
          <Grid item>
            <Typography color="textPrimary" variant="h3">
              <Trans i18nKey="whoami" />
            </Typography>
          </Grid>
          <Grid item>
            <Breadcrumbs separator=">" aria-label="breadcrumb">
              <Typography color="textPrimary" variant="h4">
                <Trans i18nKey="name" />
              </Typography>
              <Typography color="textPrimary" variant="h4">
                <Trans i18nKey="city" />
              </Typography>
              <Typography color="textPrimary" variant="h4">
                <Trans i18nKey="age" />
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <img alt="portrait" src={portrait} height={300} />
          </Grid>
          <Grid item>
            <Typography>
              <Trans i18nKey="selfDescription" />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
