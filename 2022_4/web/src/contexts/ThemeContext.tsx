import { createContext, ReactNode, useState } from "react";

export interface ThemeContextProps {
  theme: "DARK" | "LIGHT";
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"DARK" | "LIGHT">("DARK");

  function toggleTheme() {
    if (theme === "DARK") {
      setTheme("LIGHT");
      return;
    }

    if (theme === "LIGHT") {
      setTheme("DARK");
      return;
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
