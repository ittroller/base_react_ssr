import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { vi } from './vi';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: en,
    },
    vi: {
      translations: vi,
    },
  },
  fallbackLng: 'vi',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
  lng: 'vi',
});
export default i18n;
