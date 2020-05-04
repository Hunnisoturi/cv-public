import React from 'react';
import { Container, Button, makeStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Container component="main" maxWidth="xl">
        <Header />
        <Button color="primary" variant="outlined">
          WoOO
        </Button>
        <Footer />
      </Container>
    </div>
  );
};

export default withTranslation()(App);
