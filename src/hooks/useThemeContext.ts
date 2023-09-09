import { useContext, createContext } from "react";

export const ThemeContext = createContext();

export default function useThemeContext() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }

  return theme;
}
