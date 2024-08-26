/** @format */
import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationsInEng from "../locales/en/translation.json";
import translationsInGerman from "../locales/de/translation.json";
import translationsInItalian from "../locales/it/translation.json";
import translationsInArbic from "../locales/ar/translation.json";
import translationsInFrance from "../locales/fr/translation.json";
import translationsInHindi from "../locales/hi/translation.json";

// the translations
// const resources = {
//   en: {
//     translation: translationsInEng,
//   },
//   de: {
//     translation: translationsInGerman,
//   },
//   ar: {
//     translation: translationsInArbic,
//   },
//   it: {
//     translation: translationsInItalian,
//   },
//   hi: {
//     translation: translationsInHindi,
//   },
//   fr: {
//     translation: translationsInFrance,
//   },
// };

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsInEng },
      fr: { translation: translationsInFrance },
      de: { translation: translationsInGerman },
      hi: { translation: translationsInHindi },
      ar: { translation: translationsInArbic },
      it: { translation: translationsInItalian },
    }, // resources are important to load translations for the languages.
    lng: localStorage.getItem("en"), // It acts as default language. When the site loads, content is shown in this language.
    debug: true,
    fallbackLng: "fr", // use de if selected language is not available
    interpolation: {
      escapeValue: false,
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation",
  });

export default i18n;
