// Purpose: Shared content types for projects, skills, experience and education.
// Author: Thang Truong
// Date: 2026-10-18

export type ProjectType = "Frontend" | "Full-stack";

export interface Project {
  id: number;
  title: string;
  /** One-line card summary. */
  tagline: string;
  overview: string;
  problem?: string;
  role?: string;
  impact?: string;
  highlights: string[];
  architecture?: string[];
  challenges?: string[];
  learnings?: string[];
  technologies: string[];
  type: ProjectType;
  year?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  /** Unpublished projects stay in the data but are not listed anywhere. */
  published: boolean;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud & Architecture"
  | "DevOps, Automation & Quality"
  | "AI-Assisted Development"
  | "Tools";

export type CloudProvider = "AWS" | "Azure" | "GCP";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Set on cloud services so they can be grouped under their provider. */
  provider?: CloudProvider;
  /** "practice" marks ways of working (e.g. CI/CD pipelines) rather than named tools. */
  kind?: "practice";
  /** Names to match against project technology lists when they differ from `name`. */
  aliases?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  kind: "tech" | "other";
  summary?: string;
  bullets?: string[];
  technologies?: string[];
  strengths?: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  note?: string;
  current?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
}
