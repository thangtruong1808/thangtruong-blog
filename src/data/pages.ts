// Purpose: Page intro copy and meta descriptions, kept in one place for easy editing.
// Author: Thang Truong
// Date: 2026-10-18
import { profile } from "./profile";

export interface PageCopy {
  eyebrow: string;
  title: string;
  description: string;
  /** Used for <meta name="description"> and social cards. */
  meta: string;
}

type PageKey = "home" | "about" | "projects" | "skills" | "experience" | "contact";

export const pages: Record<PageKey, PageCopy> = {
  home: {
    eyebrow: profile.headline,
    title: profile.name,
    description: profile.positioning,
    meta: `${profile.name}, ${profile.role} (${profile.specialtiesLabel}) in Melbourne. Full-stack web apps plus open to Full-Stack AI Engineer and ML Engineer roles. Available immediately.`,
  },
  about: {
    eyebrow: "About",
    title: "Hi, I'm Thang. I build for the web, and I took the long way here.",
    description:
      "I build web applications end to end: React and TypeScript product UI (ordering flows, iPad POS layouts, admin dashboards), APIs with Express.js on Node.js and C# on ASP.NET Core, plus automated cloud deployments. I'm also open to Full-Stack AI Engineer and ML Engineer roles while studying Applied AI at Deakin. Here's how I got here and what I'm learning next.",
    meta: `About ${profile.name}: Melbourne-based ${profile.role} open to Full-Stack AI Engineer and ML Engineer roles, with frontend POS/dashboard work, a Swinburne ICT degree, and Applied AI at Deakin.`,
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've designed, built and shipped",
    description:
      "Full-stack platforms and frontend product UI I designed myself — from AWS e-commerce and court booking to a Melbourne fast-food ordering app with iPad POS layout. Filter by stack, then open a case study.",
    meta: `Case studies by ${profile.name}: full-stack and frontend projects — React, TypeScript, Redux, POS layouts, Node.js, ASP.NET Core, Stripe and AWS.`,
  },
  skills: {
    eyebrow: "Skills",
    title: "A toolkit backed by shipped work",
    description:
      "Frontend product UI (including touch-first POS layouts), backend APIs, cloud and DevOps. Skills used in published projects are highlighted and link to those case studies.",
    meta: `${profile.name}'s skills: React, TypeScript, Redux, Tailwind, POS/touch UI, Node.js, C#/.NET, AWS, Docker, Vitest and AI-assisted development.`,
  },
  experience: {
    eyebrow: "Experience",
    title: "Software roots, real-world reliability",
    description:
      "Software development and testing, student mentoring, and eight years in a high-volume operation. See my projects for my most recent technical work.",
    meta: `${profile.name}'s experience: software developer and tester, Swinburne Online student mentor, and transport palletizer at ALDI.`,
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your team",
    description:
      "Hiring for a frontend, backend, full-stack, DevOps, Full-Stack AI Engineer or ML Engineer role? Send a message or reach me directly, and I'll reply within 24 hours.",
    meta: `Contact ${profile.name}, ${profile.role} in Melbourne (also open to Full-Stack AI Engineer and ML Engineer). ${profile.availability}`,
  },
};
