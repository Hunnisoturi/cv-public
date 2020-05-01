import React from 'react';
import { withTranslation } from 'react-i18next';

import NavBar from './components/Navbar';

import './styles/app.scss';

const App = () => (
  <span className="app-header">
    <NavBar />
  </span>
);

export default withTranslation()(App);
