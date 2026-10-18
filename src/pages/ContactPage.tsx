// Purpose: Contact page: form, direct links and response expectations.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "../components/contact/ContactForm";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import { PageHeader } from "../components/ui/Section";
import { pages } from "../data/pages";
import { profile } from "../data/profile";
import { usePageMeta } from "../hooks/usePageMeta";

const directLinks = [
  { label: "Email", value: profile.email, href: profile.email ? `mailto:${profile.email}` : "", icon: FiMail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedinUrl, icon: FaLinkedin, external: true },
  { label: "GitHub", value: "See my code on GitHub", href: profile.githubUrl, icon: FaGithub, external: true },
  { label: "Phone", value: profile.phone, href: profile.phone ? `tel:${profile.phone}` : "", icon: FiPhone },
].filter((link) => Boolean(link.href));

const ContactPage: React.FC = () => {
  usePageMeta({ title: "Contact", description: pages.contact.meta });

  return (
    <>
      <PageHeader {...pages.contact} />

      <Container className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ContactForm />

        <aside className="space-y-6" aria-label="Direct contact">
          <Card>
            <Badge tone="success">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              {profile.status}
            </Badge>
            <p className="mt-4 text-sm font-medium text-fg">{profile.availability}</p>
            <p className="mt-3 text-sm text-muted">{profile.responseTime}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <FiMapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {profile.location}
            </p>
          </Card>

          <Card padded={false}>
            <h2 className="px-6 pt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">Reach me directly</h2>
            <ul className="mt-3 divide-y divide-line">
              {directLinks.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-16 items-center gap-4 px-6 py-3 transition-colors hover:bg-surface-2"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-surface-2 text-muted transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{label}</span>
                      <span className="block truncate text-sm font-medium text-fg">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </Container>
    </>
  );
};

export default ContactPage;
