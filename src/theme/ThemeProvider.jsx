import { useCallback, useEffect, useMemo, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES } from "@/theme/constants.js";
import { ThemeContext } from "@/theme/ThemeContext.jsx";
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  resolveTheme,
} from "@/theme/themeUtils.js";

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => resolveTheme());

  const setTheme = useCallback((nextTheme) => {
    const resolved = nextTheme === THEMES.dark ? THEMES.dark : THEMES.light;
    setThemeState(resolved);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, resolved);
    } catch {
      // Ignore storage failures and still apply the theme in-memory.
    }

    applyTheme(resolved);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark);
  }, [setTheme, theme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleSystemChange() {
      if (getStoredTheme()) {
        return;
      }

      const systemTheme = getSystemTheme();
      setThemeState(systemTheme);
      applyTheme(systemTheme);
    }

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEMES.dark,
      isLight: theme === THEMES.light,
      setTheme,
      toggleTheme,
      defaultTheme: DEFAULT_THEME,
    }),
    [setTheme, theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
