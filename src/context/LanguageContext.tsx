"use client"
import { createContext, ReactNode, useState } from "react";
export const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});
export const LanguageContextProvider = ({ children }:{children:ReactNode}) => {
  const [language, setLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev == "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


