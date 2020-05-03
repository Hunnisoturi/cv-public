import React from 'react';
import { Container, Button } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Container component="main" maxWidth="lg">
    <Header />
    <Button color="primary" variant="outlined">
      WoOO
    </Button>
    <Footer />
  </Container>
);

export default withTranslation()(App);
