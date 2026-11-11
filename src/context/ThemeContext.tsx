import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const STORAGE_KEY = "portfolio-theme";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const readStoredTheme = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "light";
  } catch {
    return true;
  }
};

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(readStoredTheme);

  // Colours come from CSS variables keyed off this attribute (see index.css).
  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode); theme still applies for this visit.
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((dark) => !dark);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
