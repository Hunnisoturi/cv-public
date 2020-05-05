import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';
import Technologies from './components/Technologies';

const styles = makeStyles({
  root: {
    height: '100%',
    background: '#2D2D2D',
  },
  container: {
    marginBottom: '4rem',
  },
});

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Header />
        <main>
          <Intro />
          <About />
          <Technologies />
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default withTranslation()(App);
