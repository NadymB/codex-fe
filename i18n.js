import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from './public/locales/en/common.json';
import viJson from './public/locales/vi/common.json';
import cnJson from './public/locales/cn/common.json';
import frJson from './public/locales/fr/common.json';
import esJson from './public/locales/es/common.json';
import deJson from './public/locales/de/common.json';
import itJson from './public/locales/it/common.json';
import jpJson from './public/locales/jp/common.json';
import krJson from './public/locales/kr/common.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enJson
  },
	vi: {
    translation: viJson
  },
  cn: {
    translation: cnJson
  },
  fr: {
    translation: frJson
  },
  es: {
    translation: esJson
  },
  de: {
    translation: deJson
  },
  it: {
    translation: itJson
  },
  jp: {
    translation: jpJson
  },
  kr: {
    translation: krJson
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;