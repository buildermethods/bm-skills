// bm-design-system: theme helper
import * as React from "react";

const STORAGE_KEY = "bm-ds-theme";

export type Theme = "light" | "dark" | "system";

function getSystemPreference(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system")
    return stored;
  return "system";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const resolved = theme === "system" ? getSystemPreference() : theme;
  const root = document.documentElement;
  if (resolved === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function useTheme() {
  // Lazy initializer so the first render already reflects the stored choice.
  // Without this, every remount (e.g. dropdown reopen) flashes "system" for
  // one render before the effect resolves the stored value.
  const [theme, setThemeState] = React.useState<Theme>(() => getStoredTheme());

  React.useEffect(() => {
    // Reapply on mount in case another tab updated localStorage while this
    // component was unmounted, and to ensure the <html> class is consistent
    // even if the inline boot script in the HTML layout was bypassed.
    const stored = getStoredTheme();
    setThemeState(stored);
    applyTheme(stored);
  }, []);

  React.useEffect(() => {
    if (theme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }, []);

  return [theme, setTheme] as const;
}
