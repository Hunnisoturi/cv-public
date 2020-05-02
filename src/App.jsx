import React from 'react';
import { Container } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Container component="main" maxWidth="md">
    <div>
      <Header />
      <Footer />
    </div>
  </Container>
);

export default withTranslation()(App);
