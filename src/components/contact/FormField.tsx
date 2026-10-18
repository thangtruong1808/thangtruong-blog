// Purpose: Labelled input/textarea with accessible inline error messaging.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";

interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email";
  multiline?: boolean;
  autoComplete?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  value,
  error,
  type = "text",
  multiline = false,
  autoComplete,
  placeholder,
  onChange,
  onBlur,
}) => {
  const errorId = `${id}-error`;
  const classes = cn(
    "w-full rounded-md border bg-surface px-4 py-3 text-base text-fg placeholder:text-muted/70",
    "transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4",
    error
      ? "border-danger focus:border-danger focus:ring-danger/15"
      : "border-line hover:border-fg/25 focus:border-accent focus:ring-accent/15"
  );
  const shared = {
    id,
    name: id,
    value,
    placeholder,
    autoComplete,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    onBlur,
    className: classes,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={6} className={cn(classes, "resize-y")} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...shared} type={type} onChange={(e) => onChange(e.target.value)} />
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
