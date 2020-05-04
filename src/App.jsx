import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';

const styles = makeStyles({
  root: {
    height: '100vh',
    background: '#2D2D2D',
  },
});

const App = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="xl">
        <main>
          <Intro />
          <About />
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default withTranslation()(App);
