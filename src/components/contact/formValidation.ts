// Purpose: Contact form field rules and validation.
// Author: Thang Truong
// Date: 2026-10-18

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const emptyForm: ContactFormValues = { name: "", email: "", subject: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const validateField = (field: keyof ContactFormValues, value: string): string | undefined => {
  const trimmed = value.trim();
  switch (field) {
    case "name":
      return trimmed.length < 2 ? "Please enter your name." : undefined;
    case "email":
      if (!trimmed) return "Please enter your email address.";
      return EMAIL_PATTERN.test(trimmed) ? undefined : "That email address doesn't look right.";
    case "subject":
      return trimmed.length < 3 ? "Add a short subject (at least 3 characters)." : undefined;
    case "message":
      return trimmed.length < 20 ? "Tell me a little more (at least 20 characters)." : undefined;
  }
};

export const validateForm = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  (Object.keys(values) as Array<keyof ContactFormValues>).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
};
