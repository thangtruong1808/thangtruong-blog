// Purpose: Provide education data asynchronously.
// Author: Thang Truong
// Date: 2025-12-11
import type { EducationItem } from "./types";

/**
 * Fetches education entries asynchronously to mimic API loading.
 */
export const fetchEducation = async (): Promise<EducationItem[]> => {
  return [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      description:
        "Focused on software engineering, web development, and computer science fundamentals. Completed comprehensive coursework in programming, algorithms, data structures, and software development methodologies.",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Development Fundamentals",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning Basics",
      ],
      projects: [
        "E-commerce Platform - Full-stack web application",
        "Task Management System - React-based project",
        "Weather API Integration - JavaScript application",
        "Portfolio Website - Responsive design project",
      ],
      achievements: [
        "Graduated with Honors (Cum Laude)",
        "Dean's List for 6 consecutive semesters",
        "Computer Science Department Award",
        "Best Capstone Project Award",
      ],
      type: "bachelor",
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      institution: "CodeAcademy Online",
      location: "Remote",
      period: "2023 - 2024",
      gpa: "A+",
      description:
        "Intensive 6-month bootcamp covering modern web development technologies and best practices. Focused on practical, hands-on learning with real-world projects.",
      courses: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript ES6+",
        "React.js Framework",
        "Node.js & Express.js",
        "MongoDB Database",
        "Git Version Control",
        "Responsive Design",
        "API Development",
      ],
      projects: [
        "Personal Portfolio Website",
        "Todo List Application",
        "Weather Dashboard",
        "Blog Platform",
      ],
      achievements: [
        "Top 10% of cohort",
        "Perfect attendance record",
        "Mentored 3 junior students",
        "Completed all projects with distinction",
      ],
      type: "certification",
    },
    {
      id: 3,
      degree: "Data Structures & Algorithms",
      institution: "LeetCode Academy",
      location: "Online",
      period: "2023 - 2024",
      gpa: "N/A",
      description:
        "Comprehensive study of data structures and algorithms through problem-solving practice. Focused on interview preparation and coding efficiency.",
      courses: [
        "Array & String Manipulation",
        "Linked Lists & Trees",
        "Graph Algorithms",
        "Dynamic Programming",
        "Sorting & Searching",
        "Time & Space Complexity",
      ],
      projects: [
        "Algorithm Visualization Tool",
        "Pathfinding Algorithm Implementation",
        "Sorting Algorithm Comparison",
      ],
      achievements: [
        "Solved 200+ coding problems",
        "Achieved 'Medium' difficulty proficiency",
        "Participated in weekly coding challenges",
        "Helped 10+ peers with problem-solving",
      ],
      type: "course",
    },
  ];
};

