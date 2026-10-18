// Purpose: Skills grouped by category (cloud services by provider); project usage is derived, not typed in.
// Author: Thang Truong
// Date: 2026-10-18
import type { CloudProvider, Project, Skill, SkillCategory } from "./types";
import { projects, usesTechnology } from "./projects";

export const skillCategories: { name: SkillCategory; description: string }[] = [
  { name: "Frontend", description: "Responsive, accessible interfaces and client-side state." },
  { name: "Backend", description: "APIs, authentication, payments and server-side logic." },
  { name: "Cloud & Architecture", description: "Serverless, containers, storage and monitoring across three clouds." },
  {
    name: "DevOps, Automation & Quality",
    description: "Version control, infrastructure as code, pipelines and testing.",
  },
  {
    name: "AI-Assisted Development",
    description: "Using Cursor and Claude Code to accelerate development and improve code quality.",
  },
  { name: "Database", description: "Relational and document data stores." },
  { name: "Tools", description: "API testing, design and team collaboration." },
];

export const cloudProviders: { name: CloudProvider; label: string }[] = [
  { name: "AWS", label: "Amazon Web Services" },
  { name: "Azure", label: "Microsoft Azure" },
  { name: "GCP", label: "Google Cloud" },
];

const aws = (name: string): Skill => ({
  name,
  category: "Cloud & Architecture",
  provider: "AWS",
  aliases: [`AWS ${name}`],
});
const azure = (name: string): Skill => ({ name, category: "Cloud & Architecture", provider: "Azure" });
const gcp = (name: string): Skill => ({ name, category: "Cloud & Architecture", provider: "GCP" });
const practice = (name: string): Skill => ({ name, category: "DevOps, Automation & Quality", kind: "practice" });

export const skills: Skill[] = [
  { name: "HTML5 & CSS3", category: "Frontend", aliases: ["HTML5"] },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "ASP.NET Core Minimal API", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "JWT auth", category: "Backend", aliases: ["JWT"] },
  { name: "Stripe", category: "Backend" },

  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Firebase", category: "Database" },

  aws("Lambda"),
  aws("EC2"),
  aws("S3"),
  aws("CloudFront"),
  aws("API Gateway"),
  aws("CloudWatch"),
  aws("RDS"),
  azure("Functions"),
  azure("Container Apps"),
  azure("Storage"),
  gcp("Cloud Run"),
  gcp("Cloud Functions"),
  gcp("BigQuery"),
  gcp("Cloud Storage"),
  gcp("Cloud Build"),

  { name: "Git", category: "DevOps, Automation & Quality", aliases: ["GitHub"] },
  { name: "GitHub Actions", category: "DevOps, Automation & Quality" },
  { name: "Terraform", category: "DevOps, Automation & Quality" },
  { name: "Docker", category: "DevOps, Automation & Quality" },
  practice("CI/CD pipelines"),
  practice("Environment configuration"),
  practice("Automated deployments"),
  practice("Unit & integration testing"),
  practice("Log-driven debugging"),
  practice("Secure, maintainable code"),

  { name: "Cursor", category: "AI-Assisted Development" },
  { name: "Claude Code", category: "AI-Assisted Development" },
  { name: "GitHub Copilot", category: "AI-Assisted Development" },
  { name: "Google Gemini", category: "AI-Assisted Development" },
  { name: "Microsoft Copilot", category: "AI-Assisted Development" },

  { name: "Postman", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "MySQL Workbench", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Slack", category: "Tools" },
];

export const skillsIn = (category: SkillCategory, provider?: CloudProvider): Skill[] =>
  skills.filter((skill) => skill.category === category && (!provider || skill.provider === provider));

/** Published projects that list this skill (or one of its aliases) in their stack. */
export const projectsUsingSkill = (skill: Skill): Project[] => {
  const names = [skill.name, ...(skill.aliases ?? [])];
  return projects.filter((project) => names.some((name) => usesTechnology(project, name)));
};
