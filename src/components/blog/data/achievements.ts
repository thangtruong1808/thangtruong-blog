// Purpose: Provide academic achievements via async function.
// Author: Thang Truong
// Date: 2025-12-11
import type { Achievement } from "../types";

/**
 * Fetches achievements asynchronously to emulate API latency.
 */
export const fetchAchievements = async (): Promise<Achievement[]> => {
  return [
    {
      id: 1,
      title: "Bachelor of Information and Communication Technology (Software Technology)",
      description:
        "Successfully completed Bachelor's degree in Information and Communication Technology (Software Technology) with focus on software development",
      date: "2025",
      icon: "🎓",
      university: "Swinburne University - Melbourne",
    },
    {
    id: 2,
      title: "Bachelor of Hospitality Management",
      description:
        "Successfully completed Bachelor's degree in Hospitality Management with focus on hospitality management",
      date: "2012",
      icon: "🎓",
      university: "BoxHill Institute - Melbourne",
    },
    {
      id: 3,
        title: "Higher Diploma in Software Engineering",
        description:
          "Successfully completed Higher Diploma in Software Engineering with focus on software engineering",
        date: "2005",
        icon: "🎓",
        university: "FPT Aptech - Ho Chi Minh City",
      },
    {
      id: 4,
      title: "Student Mentor Level 2",
      description:
        "Completed Student Mentor Program Level 2 with focus on mentoring students",
      date: "2024",
      icon: "🏆",
      university: "Swinburne University - Melbourne",
    },
    {
      id: 5,
      title: "Student Projects",
      description:
        "Completed 10+ academic projects demonstrating full-stack development skills",
      date: "2021-2025",
      icon: "💻",
      university: "Swinburne University - Melbourne",
    },
  ];
};

