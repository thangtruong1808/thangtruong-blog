// Purpose: Wrapper that fades its children in when scrolled into view.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../lib/cn";

interface RevealProps {
  as?: "div" | "li";
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ as = "div", className, delay = 0, children }) => {
  const ref = useReveal<HTMLDivElement & HTMLLIElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
