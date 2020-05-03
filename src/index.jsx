import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './translations/en/translation.json';
import translationsFI from './translations/fi/translation.json';
import translationCommon from './translations/common.json';
import App from './App';
import { register } from './serviceWorker';

import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA6227',
    },
    secondary: {
      main: '#342EAD',
    },
    background: {
      paper: '#424242',
      default: '#303030',
    },
  },
});

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          ...translationsEN,
          ...translationCommon,
        },
      },
      fi: {
        translation: {
          ...translationsFI,
          ...translationCommon,
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'navigator'],
    },
    fallbackLng: 'en',
  });

render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);

register();
