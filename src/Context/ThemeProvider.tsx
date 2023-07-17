import * as React from "react";
import { ThemeContext } from "./ThemeContext";

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>("dark");

  React.useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--color-background",
        "var(--color-background-light)"
      );
      document.documentElement.style.setProperty(
        "--color-text",
        "var(--color-text-light)"
      );
      document.documentElement.style.setProperty(
        "--color-img",
        "var(--color-img-light)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--color-background",
        "var(--color-background-dark)"
      );
      document.documentElement.style.setProperty(
        "--color-text",
        "var(--color-text-dark)"
      );
      document.documentElement.style.setProperty(
        "--color-img",
        "var(--color-img-dark)"
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
