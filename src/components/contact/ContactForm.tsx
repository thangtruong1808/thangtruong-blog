// Purpose: Contact form with inline validation, spam honeypot and EmailJS delivery.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useRef, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { profile } from "../../data/profile";
import Button from "../ui/Button";
import Card from "../ui/Card";
import FormField from "./FormField";
import {
  emptyForm,
  validateField,
  validateForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "./formValidation";

type Status = "idle" | "submitting" | "success" | "error";

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<ContactFormValues>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof ContactFormValues) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const blur = (field: keyof ContactFormValues) => () => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, values[field]) }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    // Bots fill hidden fields; pretend success without sending.
    if (honeypot) {
      setStatus("success");
      setValues(emptyForm);
      return;
    }

    setStatus("submitting");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS configuration is missing");

      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          to_name: profile.name,
        },
        publicKey
      );
      setStatus("success");
      setValues(emptyForm);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card as="section" aria-labelledby="form-title" className="sm:p-8">
      <h2 id="form-title" className="text-h3 font-semibold text-fg">
        Send a message
      </h2>
      <p className="mt-1 text-sm text-muted">All fields are required.</p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="name"
            label="Name"
            value={values.name}
            error={errors.name}
            autoComplete="name"
            placeholder="Jane Smith"
            onChange={update("name")}
            onBlur={blur("name")}
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            value={values.email}
            error={errors.email}
            autoComplete="email"
            placeholder="jane@company.com"
            onChange={update("email")}
            onBlur={blur("email")}
          />
        </div>
        <FormField
          id="subject"
          label="Subject"
          value={values.subject}
          error={errors.subject}
          placeholder="Frontend role at …"
          onChange={update("subject")}
          onBlur={blur("subject")}
        />
        <FormField
          id="message"
          label="Message"
          multiline
          value={values.message}
          error={errors.message}
          placeholder="A few lines about the role or project."
          onChange={update("message")}
          onBlur={blur("message")}
        />

        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          loading={status === "submitting"}
          icon={<FiSend className="h-4 w-4" aria-hidden="true" />}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>

        <div aria-live="polite" role="status">
          {status === "success" && (
            <p className="flex items-start gap-3 rounded-md border border-success/30 bg-success/10 p-4 text-sm text-success">
              <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              Thanks, your message is on its way. {profile.responseTime}
            </p>
          )}
          {status === "error" && (
            <p className="flex items-start gap-3 rounded-md border border-danger/30 bg-danger/10 p-4 text-sm text-danger">
              <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>
                Sorry, the message couldn't be sent. Please try again
                {profile.email && (
                  <>
                    {" "}or email me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="font-medium underline">
                      {profile.email}
                    </a>
                  </>
                )}
                .
              </span>
            </p>
          )}
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
