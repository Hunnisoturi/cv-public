import React from 'react';
import { Container, makeStyles, Grid, Divider, Fade, Button, Typography, Box } from '@material-ui/core';
import { Trans, withTranslation } from 'react-i18next';
import CookieConsent from 'react-cookie-consent';
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
    marginTop: Spacers.spacerDesktop,
    [theme.breakpoints.down('xs')]: {
      marginTop: Spacers.spacerMobile,
    },
  },
  mainGrid: {
    paddingTop: Spacers.headerDesktop,
    [theme.breakpoints.down('lg')]: {
      paddingTop: Spacers.headerMedium,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: Spacers.headerMobile,
    },
  },
  headline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphic: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  arrow: {
    height: '100px',
    width: 'auto',
  },
  arrowSpan: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: Spacers.spacerDesktop,
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
              className={classes.headline}
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
              className={classes.graphic}
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
      <CookieConsent
        location="bottom"
        style={{
          background: '#D3D3D3',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          minHeight: '4rem',
          paddingLeft: '32px',
          paddingRight: '32px',
        }}
        ButtonComponent={({ onClick }) => (
          <Button variant="contained" color="primary" onClick={onClick}>
            <Typography color="textPrimary">
              <Box fontWeight={700}>
                <Trans i18nKey="cookieConsent" />
              </Box>
            </Typography>
          </Button>
        )}
      >
        <Typography variant="h5" color="textPrimary">
          <Trans i18nKey="cookieBar" />
        </Typography>
      </CookieConsent>
    </Container>
  );
};

export default withTranslation()(App);
