import { useContext } from "react";

import { ThemeContextProps, ThemeContext } from "../contexts/ThemeContext";

export function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  return context;
}
