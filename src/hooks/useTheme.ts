// Purpose: Read and cycle colour theme preference: light, dark, or system (OS).
// Author: Thang Truong
// Date: 2026-10-18
import { useCallback, useEffect, useState } from "react";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";
const PREFERENCES: ThemePreference[] = ["light", "dark", "system"];

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

const resolveTheme = (preference: ThemePreference): ResolvedTheme =>
  preference === "system" ? (darkQuery().matches ? "dark" : "light") : preference;

const applyResolved = (resolved: ResolvedTheme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", resolved === "dark" ? "#0c0a09" : "#fafaf9");
};

const readPreference = (): ThemePreference => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark" || saved === "system") return saved;
  return "system";
};

/**
 * The initial class is set by the inline script in index.html (no flash);
 * this hook mirrors preference + resolved theme into React state.
 */
export const useTheme = () => {
  const [preference, setPreference] = useState<ThemePreference>(readPreference);
  const [resolved, setResolved] = useState<ResolvedTheme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const next = resolveTheme(preference);
    applyResolved(next);
    setResolved(next);
  }, [preference]);

  useEffect(() => {
    if (preference !== "system") return;
    const query = darkQuery();
    const onChange = (event: MediaQueryListEvent) => {
      const next: ResolvedTheme = event.matches ? "dark" : "light";
      applyResolved(next);
      setResolved(next);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [preference]);

  const cycleTheme = useCallback(() => {
    setPreference((current) => {
      const next = PREFERENCES[(PREFERENCES.indexOf(current) + 1) % PREFERENCES.length];
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { preference, theme: resolved, cycleTheme };
};
