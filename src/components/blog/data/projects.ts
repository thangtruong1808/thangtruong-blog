// Purpose: Provide featured projects via async API-like function.
// Author: Thang Truong
// Date: 2025-12-11
import type { Project } from "../types";

/**
 * Fetches featured projects asynchronously to mimic API behavior.
 */
export const fetchProjects = async (): Promise<Project[]> => {
  return [
    {
      id: 1,
      title: "Todo List Application",
      description:
        "Full-stack task manager with Kanban drag-and-drop and sortable list views, backed by Express/MySQL APIs, validation/filtering, and documented Postman flows.",
      technologies: ["HTML5", "TailwindCSS", "TypeScript", "React.js", "Express.js", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/todo-app",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "Personal portfolio with React + TypeScript, dark mode, motion-enhanced sections, and Core Web Vitals-friendly, mobile-first layout.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
      ],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Weather dashboard consuming OpenWeather APIs with geolocation lookup, current conditions, multi-day forecast, and graceful loading states.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "OpenWeather API",
        "Fetch API",
      ],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/weather-app",
    },
  ];
};

