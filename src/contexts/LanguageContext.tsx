import { createContext, useState } from "react";
import { SUPPORTED_LANGS } from "../constants/generalConst";
import {
  type SUPPORTED_LANGS_ABR,
  type LanguageContextType,
} from "../constants/generalTypes";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SUPPORTED_LANGS_ABR>(() => {
    const savedLang = localStorage.getItem("bazu_lang") as SUPPORTED_LANGS_ABR;
    return savedLang === "es" || savedLang === "en" ? savedLang : "es";
  });

  const updateLanguage = (newLang: SUPPORTED_LANGS_ABR) => {
    setLanguage(newLang);
    localStorage.setItem("bazu_lang", newLang);
  };

  const getLanguageCPL = () => SUPPORTED_LANGS[language];

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: updateLanguage, getLanguageCPL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
