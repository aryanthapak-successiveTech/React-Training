"use client"
import { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    console.log("called")
    setLanguage((prev) => (prev == "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


