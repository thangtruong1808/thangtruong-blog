// Purpose: Page header and content section with a consistent eyebrow/title/description rhythm.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { cn } from "../../lib/cn";
import Container from "./Container";
import Reveal from "./Reveal";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn("font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent", className)}>
    {children}
  </p>
);

export const PageHeader: React.FC<HeadingProps> = ({ eyebrow, title, description, action }) => (
  <header className="border-b border-line">
    <Container className="py-14 sm:py-20">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="mt-3 max-w-3xl text-h1 font-bold text-fg">{title}</h1>
      {description && <p className="mt-4 max-w-prose text-lead text-muted">{description}</p>}
      {action && <div className="mt-8">{action}</div>}
    </Container>
  </header>
);

interface SectionProps extends HeadingProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, eyebrow, title, description, action, className, children }) => {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-section", className)}>
      <Container>
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 id={headingId} className="mt-3 text-h2 font-bold text-fg">
              {title}
            </h2>
            {description && <p className="mt-3 max-w-prose text-muted">{description}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
};

export default Section;
