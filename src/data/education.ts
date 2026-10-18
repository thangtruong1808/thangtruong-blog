// Purpose: Education (reverse-chronological) and achievements shown on the About page.
// Author: Thang Truong
// Date: 2026-10-18
import type { Achievement, EducationItem } from "./types";

export const education: EducationItem[] = [
  {
    id: "deakin-maai",
    title: "Master of Applied Artificial Intelligence",
    institution: "Deakin University",
    period: "Jun 2026 – Present",
    note: "Part-time study",
    current: true,
  },
  {
    id: "swinburne-bict",
    title: "Bachelor of ICT",
    institution: "Swinburne University of Technology, Melbourne",
    period: "Nov 2020 – Feb 2025",
    note: "Software Technology",
  },
  {
    id: "boxhill-bhm",
    title: "Bachelor of Hospitality Management",
    institution: "Box Hill Institute, Melbourne",
    period: "Jul 2008 – Jun 2012",
  },
  {
    id: "aptech-hdse",
    title: "Higher Diploma in Software Engineering",
    institution: "Aptech Worldwide, Vietnam",
    period: "Jul 2002 – Apr 2005",
  },
];

export const achievements: Achievement[] = [
  {
    id: "mentor-level-2",
    title: "Student Mentor Program — Level 2",
    institution: "Swinburne University of Technology",
    year: "2024",
    description: "Completed the Level 2 mentor program, supporting new students through their first trimester.",
  },
  {
    id: "academic-projects",
    title: "10+ academic software projects",
    institution: "Swinburne University of Technology",
    year: "2021 – 2025",
    description: "Academic projects demonstrating full-stack development skills.",
  },
];
