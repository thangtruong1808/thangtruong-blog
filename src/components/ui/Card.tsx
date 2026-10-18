// Purpose: Surface container with the shared border, radius and shadow.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "section" | "li" | "aside";
  interactive?: boolean;
  padded?: boolean;
}

const Card: React.FC<CardProps> = ({
  as: Tag = "div",
  interactive = false,
  padded = true,
  className,
  children,
  ...rest
}) => (
  <Tag
    {...rest}
    className={cn(
      "relative rounded-lg border border-line bg-surface shadow-soft",
      padded && "p-6 sm:p-7",
      interactive &&
        "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-fg/20 hover:shadow-lift",
      className
    )}
  >
    {children}
  </Tag>
);

export default Card;
