// Purpose: Icon button that switches between light and dark theme.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="grid h-11 w-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {isDark ? <FiSun className="h-5 w-5" aria-hidden="true" /> : <FiMoon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
