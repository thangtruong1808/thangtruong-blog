// Purpose: Work history for the Experience page, newest end date first, split into software and other roles.
// Author: Thang Truong
// Date: 2026-10-18
import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "swinburne-mentor",
    role: "Student Mentor",
    company: "Swinburne Online",
    location: "Melbourne, VIC",
    period: "Jul 2022 – May 2025",
    kind: "tech",
    summary:
      "Selected as a mentor to support new online students in navigating Canvas, understanding academic integrity and staying on track with weekly study tasks, while providing practical guidance and study strategies.",
    strengths: ["Mentoring", "Communication", "Canvas LMS"],
  },
  {
    id: "aldi",
    role: "Transport Palletizer",
    company: "ALDI Distribution Warehouse",
    location: "Truganina, VIC",
    period: "Oct 2016 – Mar 2025",
    kind: "other",
    summary:
      "Operated palletizing machinery, managed stock movements and supported trailer loading in a fast-paced environment, consistently maintaining strong safety, accuracy and teamwork.",
    strengths: ["Reliability", "Safety", "Accuracy", "Teamwork"],
  },
  {
    id: "gcs",
    role: "Software Developer / Tester",
    company: "GCS",
    location: "Ho Chi Minh City, Vietnam",
    period: "May 2004 – Jul 2007",
    kind: "tech",
    summary:
      "Built and maintained PHP and JavaScript web apps, performed functional and regression testing, and supported troubleshooting to keep releases stable and on schedule.",
    technologies: ["PHP", "JavaScript"],
    strengths: ["Functional testing", "Regression testing", "Troubleshooting"],
  },
];

export const transferableStrengths = ["Reliability", "Safety", "Teamwork", "Mentoring", "Communication"];
