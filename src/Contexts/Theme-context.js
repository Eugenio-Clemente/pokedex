import { createContext } from "react";

export const ThemeContext = createContext({});

export const themes = {
  light: {
    color: "#000000",
    background: "#ffffff",
  },

  dark: {
    color: "#ffffff",
    background: "#333333",
  },
};
