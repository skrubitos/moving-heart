import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import hr from "./locales/hr/translation.json";
import en from "./locales/en/translation.json";

const STORAGE_KEY = "language";
const savedLang = localStorage.getItem(STORAGE_KEY);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hr: { translation: hr },
      en: { translation: en },
    },
    lng: savedLang ?? "hr",
    fallbackLng: "hr",
    interpolation: { escapeValue: false },
  });

// Persist language changes to localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;
