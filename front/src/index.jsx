import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './translations/en/translation.json';
import translationsFI from './translations/fi/translation.json';
import translationCommon from './translations/common.json';
import App from './App';
import { register } from './serviceWorker';

import 'typeface-nunito';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#D38A51',
    },
    secondary: {
      main: '#434343',
    },
    background: {
      paper: '#ffffff',
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Nunito, Roboto',
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
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);

register();
