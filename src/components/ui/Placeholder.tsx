// Purpose: Dev-only marker so missing content is visible while editing but hidden on the live site.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { isPlaceholder } from "../../lib/content";

const Placeholder: React.FC<{ text?: string }> = ({ text }) => {
  if (!import.meta.env.DEV || !isPlaceholder(text)) return null;
  return (
    <span className="mt-2 block rounded-sm border border-dashed border-danger/50 bg-danger/5 px-2 py-1 font-mono text-xs text-danger">
      {text}
    </span>
  );
};

export default Placeholder;
