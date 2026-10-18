// Purpose: Single source for name, positioning, links and page metadata.
// Author: Thang Truong
// Date: 2026-10-18

const env = import.meta.env;

const cleanEmail = (value?: string) => (value ?? "").trim().replace(/\.$/, "");

const role = "Software Developer";
const specialties = ["FrontEnd", "BackEnd", "FullStack", "DevOps"] as const;

export const profile = {
  name: "Thang Truong",
  role,
  specialties,
  headline: [role, ...specialties].join(" | "),
  location: "Melbourne, Australia",
  positioning:
    "I take web products from interface to production: React and TypeScript front ends, Node.js and .NET APIs, and automated deployments on AWS, Azure and GCP.",
  intro:
    "Swinburne ICT graduate, now studying a part-time Master of Applied AI at Deakin, with an earlier career as a PHP and JavaScript developer and tester.",
  status: "Open to work",
  availability: "Australian citizen based in Melbourne. Available immediately and open to relocation.",
  responseTime: "I usually reply within 24 hours (Melbourne time).",
  email: cleanEmail(env.VITE_AUTHOR_EMAIL),
  phone: (env.VITE_PHONE ?? "").trim(),
  githubUrl: env.VITE_GITHUB_URL ?? "",
  linkedinUrl: env.VITE_LINKEDIN_URL ?? "",
  featuredVideoUrl: (env.VITE_FEATURED_VIDEO_URL ?? "").trim(),
  cvUrl: "/cv/Thang-Truong-CV.pdf",
  hasCv: __HAS_CV__,
  siteUrl: "https://thang-truong.blog",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
] as const;
