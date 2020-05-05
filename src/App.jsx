import React from 'react';
import { Container, makeStyles, Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Headline from './components/Headline';

const styles = makeStyles({
  root: {
    height: '100%',
    background: '#2D2D2D',
  },
  container: {
    marginBottom: '4rem',
  },
  mainGrid: {
    marginTop: '150px',
  },
});

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Header />
        <Grid item xs={12} sm container spacing={3} className={classes.mainGrid}>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Headline />
              <Headline />
            </Grid>
          </Grid>
          <Grid item xs container direction="column" alignItems="center">
            <Grid item xs={12} container>
              <Grid item>
                <About />
              </Grid>
              <Grid item xs={6}>
                <About />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Technologies />
      </Container>
      <Footer />
    </div>
  );
};

export default withTranslation()(App);
