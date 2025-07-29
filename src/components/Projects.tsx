import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "frontend" | "fullstack" | "mobile" | "other";
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
      ],
      category: "fullstack",
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Framer Motion",
      ],
      category: "frontend",
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-manager-demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful visualizations.",
      technologies: [
        "React",
        "JavaScript",
        "Chart.js",
        "OpenWeatherMap API",
        "CSS3",
      ],
      category: "frontend",
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://weather-demo.com",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
      ],
      category: "fullstack",
      githubUrl: "https://github.com/username/blog-platform",
      liveUrl: "https://blog-demo.com",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies and featuring dark mode support.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      category: "frontend",
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com",
    },
    {
      id: 6,
      title: "API Gateway",
      description:
        "A microservices API gateway with authentication, rate limiting, and request routing capabilities.",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "AWS"],
      category: "fullstack",
      githubUrl: "https://github.com/username/api-gateway",
      liveUrl: "https://api-gateway-demo.com",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "mobile", name: "Mobile" },
    { id: "other", name: "Other" },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project represents
          a unique challenge and showcases different aspects of my development
          skills.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-blue-100 mb-6">
            I'm always open to discussing new opportunities and exciting
            projects. Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
