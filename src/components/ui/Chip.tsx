// Purpose: Toggleable filter chip (exposes pressed state to assistive tech).
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";

interface ChipProps {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}

const Chip: React.FC<ChipProps> = ({ pressed, onClick, children, count }) => (
  <button
    type="button"
    aria-pressed={pressed}
    onClick={onClick}
    className={cn(
      "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200",
      pressed
        ? "border-fg bg-fg text-canvas"
        : "border-line bg-surface text-muted hover:border-fg/30 hover:text-fg"
    )}
  >
    {children}
    {count !== undefined && (
      <span className={cn("font-mono text-xs", pressed ? "text-canvas/70" : "text-muted/80")}>{count}</span>
    )}
  </button>
);

export default Chip;
