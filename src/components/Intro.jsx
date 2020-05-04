import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  introContainer: {
    color: '#ffffff',
    paddingTop: '100px',
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
      <Grid container>
        <Grid item md={8}>
          <Typography className={classes.multiLine} variant="h1">
            <Trans i18nKey="headline" />
          </Typography>
        </Grid>
        <Grid item md={4} className={classes.description}>
          <Typography variant="subtitle1" component="p">
            <Trans i18nKey="introText" />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
