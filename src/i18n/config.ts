import i18n from 'i18next';
import english from './localization/en.json';
import russian from './localization/ru.json';
import ukrainian from './localization/ua.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: english,
  },
  ru: {
    translation: russian,
  },
  ua: {
    translation: ukrainian,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});