import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import About from './About';

const styles = makeStyles({
  introContainer: {
    color: '#ffffff',
    paddingTop: '100px',
    flexGrow: '1',
  },
  multiLine: {
    whiteSpace: 'pre',
  },
  description: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Intro = () => {
  const classes = styles();
  return (
    <Container className={classes.introContainer} maxWidth="xl">
      <Grid container direction="row" spacing={3}>
        <Grid item xs={8}>
          <Typography className={classes.multiLine} variant="h1">
            <Trans i18nKey="headline" />
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <About />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
