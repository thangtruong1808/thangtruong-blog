// Purpose: Site footer with navigation, professional links and a closing contact prompt.
// Author: Thang Truong
// Date: 2026-10-18
import React from "react";
import { Link } from "react-router-dom";
import { navItems, profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import Container from "../ui/Container";

const Footer: React.FC = () => (
  <footer className="mt-auto border-t border-line">
    <Container className="grid gap-10 py-12 sm:grid-cols-[1.5fr_1fr] sm:py-16">
      <div>
        <p className="text-lg font-semibold text-fg">{profile.name}</p>
        <p className="mt-2 max-w-sm text-sm text-muted">
          {profile.headline}. {profile.availability}
        </p>
        <ul className="mt-5 flex gap-1" aria-label="Profiles">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Footer">
        <ul className="grid grid-cols-2 gap-x-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
    <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Built with React, TypeScript and Tailwind CSS</p>
    </Container>
  </footer>
);

export default Footer;
