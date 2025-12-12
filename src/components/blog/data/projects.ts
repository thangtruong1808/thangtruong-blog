// Purpose: Provide featured projects via async API-like function.
// Author: Thang Truong
// Date: 2025-12-11

import type { Project } from "../types";
import NewsStudioAppImage from "../../../assets/NEWSSTUDIOAPP_IMAGE.jpg";
import CountriesExplorerAppImage from "../../../assets/CountriesExplorer2.jpg";

/**
 * Fetches featured projects asynchronously to mimic API behavior.
 */
export const fetchProjects = async (): Promise<Project[]> => {
  return [
    {
      id: 1,
      title: "Todo List Application",
      description:
        "This is a full-stack task management app with an Express/MySQL REST API and a React/Vite + TypeScript frontend, featuring both Kanban drag-and-drop and sortable list views, robust validation/filtering, and comprehensive documentation plus Postman testing guides.",
      technologies: [
        "HTML5",
        "TailwindCSS",
        "TypeScript",
        "React.js",
        "Express.js",
        "MySQL",
        "Postman",
      ],
      image: import.meta.env.VITE_TODOLISTAPP_IMAGE ?? "",
      liveUrl: import.meta.env.VITE_TODOLISTAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_TODOLISTAPP_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 2,
      title: "Project Tracker Application",
      description:
        "This is a GraphQL-first service-layer backend that centralizes projects, tasks, and resources within a single, strongly typed schema. It uses a relational database with migrations and seeded datasets to ensure consistent, reproducible environments. A modular resolver layer enables efficient, maintainable queries and mutations. A thin frontend consumes the API to deliver responsive dashboards and workload visibility. The project showcases strong skills in schema design, database evolution, and scalable GraphQL service architecture",
      technologies: [
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Apollo Server",
        "Apollo Client",
        "Apollo Query",
        "Apollo Mutation",
        "Apollo resolver",
        "MySQL",
        "Postman",
      ],
      image: import.meta.env.VITE_PROJECTTRACKERAPP_IMAGE ?? "",
      liveUrl: import.meta.env.VITE_PROJECTTRACKERAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_PROJECTTRACKERAPP_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 3,
      title: "NewsStudio Application",
      description:
        "Built a secure full-stack dashboard app with TypeScript, React.js, Next.js and serverless architecture. Implemented RBAC, responsive UI with Tailwind, advanced tables, Cloudinary integration to store photos, videos, and MySQL database support. Followed best practices in type safety, config management, and robust error/state handling",
      technologies: [
        "HTML5",
        "TailwindCSS",
        "TypeScript",
        "React.js",
        "Next.js",
        "Cloudinary",
        "MySQL",
        "Postman",
      ],
      image: NewsStudioAppImage,
      liveUrl: import.meta.env.VITE_NEWSSTUDIOAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_NEWSSTUDIOAPP_GITHUB ?? "",
      category: "Full-stack",
    },
    {
      id: 4,
      title: "Countries Explorer Application",
      description:
        "Developed a modern, full-featured web application that provides interactive exploration of 250+ countries with comprehensive geographic, cultural, and economic data. The application enables users to browse detailed country information including borders, flags, capitals, and coordinates, with multi-criteria filtering by continent, language, and currency, plus real-time search functionality. Key features include interactive data visualizations and dashboards displaying analytics for continents, languages, and currencies using Chart.js, Google Maps integration for viewing country locations, dark/light theme switching with persistent preferences, and a fully responsive mobile-first design. The application leverages React 19 with TypeScript, GraphQL with Apollo Client for optimized data fetching, Material-UI for accessible and consistent design, Zustand for state management, and Vite with SWC for fast build times, resulting in a performant, scalable solution with a reusable component architecture.",
      technologies: [        
        "HTML5",
        "Material-UI",
        "TypeScript",
        "React.js",
        "Zustand",        
        "Emotion",
        "Node.js",
        "GraphQL",
        "Apollo Client",
        "Apollo Query",
        "Chart.js",        
        "Vite",        
        "Google Maps API",     
        "Postman",
      ],
      image: CountriesExplorerAppImage,        
      liveUrl: import.meta.env.VITE_COUNTRIESEXPLORERAPP_LIVE_URL ?? "",
      githubUrl: import.meta.env.VITE_COUNTRIESEXPLORERAPP_GITHUB ?? "",
      category: "Frontend",
    },
    // {
    //   id: 5,
    //   title: "Weather App",
    //   description:
    //     "Weather dashboard consuming OpenWeather APIs with geolocation lookup, current conditions, multi-day forecast, and graceful loading states.",
    //   technologies: [
    //     "JavaScript",
    //     "HTML5",
    //     "CSS3",
    //     "OpenWeather API",
    //     "Fetch API",
    //   ],
    //   image:
    //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/johndoe/weather-app",
    //   category: "Frontend",
    // },
  ];
};

