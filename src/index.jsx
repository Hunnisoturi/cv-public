import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './translations/en/translation.json';
import translationsFI from './translations/fi/translation.json';
import translationCommon from './translations/common.json';
import App from './App';
import { register } from './serviceWorker';

import 'typeface-roboto';

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
  });

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

register();
