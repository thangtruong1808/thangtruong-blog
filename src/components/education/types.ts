// Purpose: Shared types for education components.
// Author: Thang Truong
// Date: 2025-12-11

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
  courses: string[];
  projects: string[];
  achievements: string[];
  type: "bachelor" | "certification" | "course" | "workshop";
}

