// Purpose: Icon button that cycles light → dark → system theme.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { useTheme, type ThemePreference } from "../../hooks/useTheme";

const labels: Record<ThemePreference, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const nextPreference = (current: ThemePreference): ThemePreference =>
  current === "light" ? "dark" : current === "dark" ? "system" : "light";

const ThemeToggle: React.FC = () => {
  const { preference, cycleTheme } = useTheme();
  const next = nextPreference(preference);

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Theme: ${labels[preference]}. Switch to ${labels[next]}`}
      title={`Theme: ${labels[preference]} (click for ${labels[next]})`}
      className="grid h-11 w-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {preference === "light" && <FiSun className="h-5 w-5" aria-hidden="true" />}
      {preference === "dark" && <FiMoon className="h-5 w-5" aria-hidden="true" />}
      {preference === "system" && <FiMonitor className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
