import React from 'react';
import { Container, makeStyles, Grid, Divider, Fade } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { ArrowDownward } from '@material-ui/icons';
import Header from './components/Header';
import Headline from './components/Headline';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Technologies from './components/Technologies';

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
  mainGrid: {
    paddingTop: '300px',
  },
  headlineGridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    height: '100px',
    width: 'auto',
  },
  arrowSpan: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '150px',
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
              <Fade in timeout={1000}>
                <div>
                  <Headline />
                </div>
              </Fade>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.headlineGridItem}
            >
              <Fade in timeout={1700}>
                <Dots />
              </Fade>
            </Grid>
          </Grid>
          <Fade in timeout={1700}>
            <div>
              <CallToAction />
            </div>
          </Fade>
          <About />
          <Divider orientation="horizontal" className={classes.divider} />
          <Education />
          <span className={classes.arrowSpan}>
            <ArrowDownward color="secondary" className={classes.arrow} />
          </span>
          <Projects />
          <Divider orientation="horizontal" className={classes.divider} />
          <Technologies />
        </Container>
      </main>
    </div>
  );
};

export default withTranslation()(App);
