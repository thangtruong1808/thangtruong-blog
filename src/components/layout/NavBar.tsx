// Purpose: Sticky site navigation with active state, accessible mobile menu and theme toggle.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, profile } from "../../data/profile";
import { cn } from "../../lib/cn";
import Container from "../ui/Container";
import ThemeToggle from "./ThemeToggle";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors",
    isActive ? "text-fg" : "text-muted hover:text-fg"
  );

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300",
        scrolled || open ? "border-line bg-canvas/85 backdrop-blur-md" : "border-transparent bg-canvas"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex min-h-11 items-center gap-3 rounded-md" aria-label={`${profile.name}, home`}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-md bg-fg font-mono text-sm font-semibold text-canvas transition-transform group-hover:-rotate-6"
          >
            TT
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.9375rem] font-semibold text-fg">{profile.name}</span>
            <span className="text-xs text-muted">{profile.role}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md text-fg hover:bg-surface-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX className="h-5 w-5" aria-hidden="true" /> : <FiMenu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <Container className="py-3">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-12 items-center rounded-md px-3 text-base font-medium",
                      isActive ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
