import React from 'react';
import { Container, makeStyles, Grid, Divider, Fade } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { Spacers } from './utils/styles';
import Header from './components/Header';
import Headline from './components/Headline';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Technologies from './components/Technologies';
import ArrowDown from './components/ArrowDown';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ReactComponent as Dots } from './assets/dots.svg';

const styles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '50px',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0px',
    },
  },
  container: {
    marginBottom: '4rem',
  },
  divider: {
    marginTop: '150px',
  },
  mainGrid: {
    paddingTop: '300px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: Spacers.spacerMobile,
    },
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
  headlineGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
    dots: {
      maxWidth: '562px',
      [theme.breakpoints.down('xs')]: {
        height: '180px',
      },
    },
  },
}));

const App = () => {
  const classes = styles();
  return (
    <Container id="home" maxWidth="xl" className={classes.root}>
      <Header />
      <main>
        <Container maxWidth="xl" className={classes.mainGrid}>
          <Grid container className={classes.headlineGrid} spacing={5}>
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
                <Dots className={classes.dots} />
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
          <Projects />
          <Divider orientation="horizontal" className={classes.divider} />
          <Technologies />
          <ArrowDown />
        </Container>
      </main>
      <Contact />
      <Footer />
    </Container>
  );
};

export default withTranslation()(App);
