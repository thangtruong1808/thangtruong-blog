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
    meta: `${profile.name}, ${profile.role} (FrontEnd, BackEnd, FullStack, DevOps) in Melbourne. I build and deploy full-stack web apps with React, TypeScript, Node.js and AWS. Available immediately.`,
  },
  about: {
    eyebrow: "About",
    title: "Hi, I'm Thang. I build for the web, and I took the long way here.",
    description:
      "I build web applications end to end: React and TypeScript interfaces, APIs with Express.js on Node.js and with C# on ASP.NET Core Minimal API, plus automated cloud deployments. Here's how I got here and what I'm learning next.",
    meta: `About ${profile.name}: Melbourne-based ${profile.role} with a Swinburne ICT degree, a part-time Master of Applied AI at Deakin, and full-stack projects deployed on AWS.`,
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've designed, built and shipped",
    description:
      "Full-stack and frontend applications I built and deployed myself. Filter by stack, then open a case study for the architecture and decisions.",
    meta: `Case studies by ${profile.name}: full-stack and frontend projects built with React, TypeScript, Node.js, MySQL, Stripe and AWS.`,
  },
  skills: {
    eyebrow: "Skills",
    title: "A toolkit backed by shipped work",
    description:
      "What I use across the stack: frontend, backend, cloud and DevOps. Skills I've used in my projects link straight to them.",
    meta: `${profile.name}'s skills: React, TypeScript, Node.js, C#/.NET, AWS, Azure, GCP, Docker, Terraform, CI/CD and AI-assisted development.`,
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
      "Hiring for a frontend, backend, full-stack or DevOps role? Send a message or reach me directly, and I'll reply within 24 hours.",
    meta: `Contact ${profile.name}, ${profile.role} in Melbourne. ${profile.availability}`,
  },
};
