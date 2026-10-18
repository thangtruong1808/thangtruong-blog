// Purpose: Non-interactive label for tech stack, status and metadata.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";

type Tone = "neutral" | "accent" | "success";

const tones: Record<Tone, string> = {
  neutral: "border-line bg-surface-2 text-muted",
  accent: "border-accent/25 bg-accent-soft/60 text-accent dark:bg-accent-soft/40",
  success: "border-success/30 bg-success/10 text-success",
};

interface BadgeProps {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ tone = "neutral", className, children }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium",
      tones[tone],
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
