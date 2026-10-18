// Purpose: Horizontal page container with the shared max width and gutters.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...rest }) => (
  <div {...rest} className={cn("mx-auto w-full max-w-content px-5 sm:px-8", className)}>
    {children}
  </div>
);

export default Container;
