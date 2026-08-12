import React, { createContext, useContext, useEffect, useState } from "react";
import { colors, darkColors } from "../theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const palette = mode === "dark" ? darkColors : colors;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, colors: palette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);