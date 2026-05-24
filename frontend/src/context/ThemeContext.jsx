import { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the provider component
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Toggle between dark and light
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* Apply a data-theme attribute to the root div so CSS variables can switch */}
      <div data-theme={isDark ? "dark" : "light"} className="theme-root">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 3. Custom hook to consume the context easily
export function useTheme() {
  return useContext(ThemeContext);
}
