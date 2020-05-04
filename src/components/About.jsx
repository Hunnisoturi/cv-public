import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Grid, Breadcrumbs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import portrait from '../assets/portrait.jpg';

const styles = makeStyles(theme => ({
  container: {
    paddingTop: '100px',
  },
  gridContainer: {
    width: '40%',
    background: theme.palette.primary.main,
    color: '#ffffff',
  },
}));

const About = () => {
  const classes = styles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container className={classes.gridContainer} direction="column">
        <Grid item>
          <Breadcrumbs separator=">" aria-label="breadcrumb" component="p">
            <Typography color="textPrimary" component="p">
              <Trans i18nKey="name" />
            </Typography>
            <Typography color="textPrimary">
              <Trans i18nKey="city" />
            </Typography>
            <Typography color="textPrimary">
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
    </Container>
  );
};

export default About;
