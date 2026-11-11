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

// public/index.html sets data-theme before first paint (the visitor's saved
// choice, else dark); start from that so React and the page agree.
const initialTheme = (): boolean =>
  document.documentElement.dataset.theme === "dark";

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    // Keep the mobile browser bar in step with the page colour.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDarkMode ? "#12110f" : "#f3efe7");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((dark) => {
      try {
        localStorage.setItem(STORAGE_KEY, dark ? "light" : "dark");
      } catch {
        // Storage unavailable (private mode); theme still applies for this visit.
      }
      return !dark;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
