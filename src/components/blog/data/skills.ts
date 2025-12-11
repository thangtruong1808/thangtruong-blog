// Purpose: Provide skills data through an async accessor.
// Author: Thang Truong
// Date: 2025-12-11
import type { Skill } from "../types";

/**
 * Fetches skills asynchronously to simulate remote data.
 */
export const fetchSkills = async (): Promise<Skill[]> => {
  return [
    { name: "HTML5 and CSS3", level: 4, category: "Frontend" },
    { name: "TailwindCSS", level: 4, category: "Frontend" },
    { name: "JavaScript", level: 4, category: "Frontend" },
    { name: "TypeScript", level: 4, category: "Frontend" },
    { name: "React", level: 4, category: "Frontend" },

    { name: "Next.js", level: 4, category: "Backend" },
    { name: "GraphQL", level: 4, category: "Backend" },
    { name: "Node.js", level: 4, category: "Backend" },
    { name: "Express.js", level: 4, category: "Backend" },

    { name: "MySQL", level: 4, category: "Database" },
    { name: "PostgreSQL", level: 4, category: "Database" },
    { name: "MongoDB", level: 4, category: "Database" },
    { name: "Firebase", level: 4, category: "Database" },

    { name: "GitHub", level: 4, category: "Tools" },
    { name: "MySQL Workbench", level: 4, category: "Tools" },
    { name: "Figma", level: 4, category: "Tools" },
    { name: "Postman", level: 4, category: "Tools" },
    { name: "Jira", level: 4, category: "Tools" },
    { name: "Slack", level: 4, category: "Tools" },

    { name: "AWS Architecture", level: 3, category: "Cloud" },
    { name: "AWS EC2", level: 3, category: "Cloud" },
    { name: "AWS S3", level: 3, category: "Cloud" },
    { name: "AWS RDS", level: 3, category: "Cloud" },
    { name: "AWS CloudFront", level: 3, category: "Cloud" },
    { name: "AWS CloudWatch", level: 3, category: "Cloud" },

    { name: "Cursor", level: 4, category: "AICodeAgent" },
    { name: "GitHub Copilot", level: 4, category: "AICodeAgent" },
    { name: "Google Gemini", level: 4, category: "AICodeAgent" },
    { name: "Copilot", level: 4, category: "AICodeAgent" },
  ];
};

