"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Navbar from "./navbar";

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export default function ClientShell({ children }) {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("ittisal-language");
    const savedTheme = window.localStorage.getItem("ittisal-theme");
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ittisal-language", language);
    window.localStorage.setItem("ittisal-theme", theme);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language, theme]);

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      <div className={`min-h-screen ${theme === "dark" ? "theme-dark" : ""} ${theme === "aurora" ? "theme-aurora" : ""} ${theme === "nocturne" ? "theme-nocturne" : ""}`}>
        <Navbar />
        {children}
      </div>
    </AppContext.Provider>
  );
}
