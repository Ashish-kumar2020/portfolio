import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Theme } from "../types/theme";
import { themes } from "../theme/themes";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: (typeof themes)[Theme];
}



// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("green");

  const colors = useMemo(() => themes[theme], [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


