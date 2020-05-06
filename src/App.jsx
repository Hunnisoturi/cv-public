import React from 'react';
import { Container, makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import { Trans, withTranslation } from 'react-i18next';
import { KeyboardArrowDown } from '@material-ui/icons';
import Header from './components/Header';
import Headline from './components/Headline';
import About from './components/About';
import Education from './components/Education';

import { ReactComponent as Dots } from './assets/dots.svg';

const styles = makeStyles({
  root: {
    height: '100%',
    background: '#F5F5F5',
  },
  container: {
    marginBottom: '4rem',
  },
  divider: {
    marginTop: '150px',
  },
  downIcon: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainGrid: {
    paddingTop: '300px',
  },
  headlineGridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollDown: {
    marginTop: '300px',
  },
});

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Header />
      <main>
        <Container maxWidth="xl" className={classes.mainGrid}>
          <Grid container direction="row">
            <Grid
              item
              xs={6}
              className={classes.headlineGridItem}
            >
              <Headline />
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.headlineGridItem}
            >
              <Dots />
            </Grid>
          </Grid>
          <Typography
            color="secondary"
            align="center"
            variant="h5"
            className={classes.scrollDown}
          >
            <Trans i18nKey="callToAction" />
          </Typography>
          <span className={classes.downIcon}>
            <KeyboardArrowDown color="secondary" />
          </span>
          <About />
          <Divider orientation="horizontal" className={classes.divider} />
          <Education />
          <About />
        </Container>
      </main>
    </div>
  );
};

export default withTranslation()(App);
