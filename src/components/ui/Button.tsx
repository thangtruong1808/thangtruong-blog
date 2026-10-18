// Purpose: Single button primitive rendered as <button>, router <Link>, or external <a>.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";
import Spinner from "./Spinner";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Internal route: renders a router Link. */
  to?: string;
  /** External URL or file: renders an anchor. */
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  "aria-label"?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-soft hover:brightness-110 hover:shadow-lift dark:hover:brightness-95",
  secondary: "border border-line bg-surface text-fg shadow-soft hover:border-fg/25 hover:bg-surface-2",
  ghost: "text-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-[0.9375rem]",
};

const buttonClasses = (variant: Variant = "primary", size: Size = "md", className?: string) =>
  cn(
    "inline-flex select-none items-center justify-center gap-2 rounded-md font-semibold",
    "transition-[transform,box-shadow,background-color,border-color,filter] duration-200",
    "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  icon,
  iconRight,
  to,
  href,
  target,
  rel,
  download,
  type = "button",
  onClick,
  disabled,
  loading = false,
  "aria-label": ariaLabel,
}) => {
  const classes = buttonClasses(variant, size, className);

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {icon}
        <span>{children}</span>
        {iconRight}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={classes} aria-label={ariaLabel}>
        {icon}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
      className={classes}
    >
      {loading ? <Spinner className="h-4 w-4" /> : icon}
      <span>{children}</span>
      {!loading && iconRight}
    </button>
  );
};

export default Button;
