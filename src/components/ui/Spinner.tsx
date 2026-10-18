// Purpose: Small inline loading spinner.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <span
    aria-hidden="true"
    className={cn(
      "inline-block animate-spin rounded-full border-2 border-current border-r-transparent",
      className ?? "h-5 w-5"
    )}
  />
);

export default Spinner;
