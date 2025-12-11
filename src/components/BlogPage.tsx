import React from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
}

interface BlogPageProps {
  authorName: string;
  authorBio: string;
  authorAvatar?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const BlogPage: React.FC<BlogPageProps> = ({
  authorName,
  authorBio,
  authorAvatar = "",
  location = "San Francisco, CA",
  email = "john.doe@example.com",
  github = "https://github.com/johndoe",
  linkedin = "https://linkedin.com/in/johndoe",
  twitter = "https://twitter.com/johndoe",
}) => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Responsive Components with React and TypeScript",
      excerpt:
        "Learn how to create reusable, responsive components that work seamlessly across all devices using React and TypeScript.",
      content:
        "In this comprehensive guide, we'll explore the best practices for building responsive components...",
      date: "2024-01-15",
      category: "React",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS: From Basics to Advanced",
      excerpt:
        "Discover the power of utility-first CSS and how Tailwind CSS can transform your development workflow.",
      content:
        "Tailwind CSS has revolutionized how we approach styling in modern web development...",
      date: "2024-01-10",
      category: "CSS",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "TypeScript Best Practices for React Developers",
      excerpt:
        "Essential TypeScript patterns and practices that every React developer should know for better code quality.",
      content:
        "TypeScript brings type safety to JavaScript, making our React applications more robust...",
      date: "2024-01-05",
      category: "TypeScript",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    },
  ];

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Todo List Application",
      description:
        "Built a full-stack task management app with an Express/MySQL REST API and a React/Vite + TypeScript frontend, featuring both Kanban drag-and-drop and sortable list views, robust validation/filtering, and comprehensive documentation plus Postman testing guides.",
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
        "A responsive portfolio website built with React and TypeScript. Features include dark mode, smooth animations, and mobile-first design.",
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
        "A weather application that fetches data from OpenWeather API and displays current weather and forecasts.",
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

  const skills: Skill[] = [
    // Frontend
    { name: "HTML5 and CSS3", level: 4, category: "Frontend" },
    { name: "TailwindCSS", level: 4, category: "Frontend" },
    { name: "JavaScript", level: 4, category: "Frontend" },
    { name: "TypeScript", level: 3, category: "Frontend" },
    { name: "React", level: 4, category: "Frontend" },

    // Backend
    { name: "Next.js", level: 3, category: "Backend" },
    { name: "GraphQL", level: 3, category: "Backend" },
    { name: "Node.js", level: 3, category: "Backend" },
    { name: "Express.js", level: 3, category: "Backend" },

    // Database
    { name: "MySQL", level: 3, category: "Database" },
    { name: "PostgreSQL", level: 3, category: "Database" },
    { name: "MongoDB", level: 3, category: "Database" },

    // Tools    
    { name: "GitHub", level: 4, category: "Tools" },
    { name: "MySQL Workbench", level: 4, category: "Tools" },
    { name: "Figma", level: 4, category: "Tools" },
    { name: "Postman", level: 4, category: "Tools" },
    { name: "Jira", level: 4, category: "Tools" },
    { name: "Slack", level: 4, category: "Tools" },

    // Cloud
    { name: "AWS Architecture", level: 3, category: "Cloud" },
    { name: "AWS EC2", level: 3, category: "Cloud" },
    { name: "AWS S3", level: 3, category: "Cloud" },
    { name: "AWS RDS", level: 3, category: "Cloud" },
    { name: "AWS CloudFront", level: 3, category: "Cloud" },
    { name: "AWS CloudWatch", level: 3, category: "Cloud" },

    // AICodeAgent
    { name: "Cursor", level: 4, category: "AICodeAgent" },
    { name: "GitHub Copilot", level: 4, category: "AICodeAgent" },
    { name: "Google Gemini", level: 4, category: "AICodeAgent" },
    { name: "Copilot", level: 4, category: "AICodeAgent" },
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Computer Science Graduate",
      description:
        "Successfully completed Bachelor's degree in Computer Science with focus on web development",
      date: "2024",
      icon: "🎓",
    },
    {
      id: 2,
      title: "Academic Excellence",
      description:
        "Graduated with honors and maintained 3.8+ GPA throughout academic career",
      date: "2024",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Student Projects",
      description:
        "Completed 10+ academic projects demonstrating full-stack development skills",
      date: "2023-2024",
      icon: "💻",
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getSkillLevel = (level: number) => {
    return "★".repeat(level) + "☆".repeat(5 - level);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={authorName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
              {authorName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Open to Work Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium border-2 border-green-300 dark:border-green-700 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            🚀 Open to Work
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm {authorName}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          {authorBio}
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            📝 {blogPosts.length} Articles
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
            🎓 Recent Computer Science Graduate
          </span>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href={github}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={linkedin}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={twitter}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Frontend", "Backend", "Database", "Tools", "Cloud", "AICodeAgent"].map(
            (category) => (
              <div
                key={category}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="space-y-3">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-yellow-500 text-sm">
                          {getSkillLevel(skill.level)}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Academic Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {achievement.description}
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {achievement.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-blue-100 mb-6 max-w-md mx-auto">
          Get the latest articles and insights delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Let's Connect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a recent Computer Science graduate passionate about web
              development and eager to start my career in software engineering.
              I'm looking for opportunities to apply my skills and learn from
              experienced developers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  📧
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  📍
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  💼
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#projects"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                → View My Projects
              </a>
              <a
                href="#blog"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                → Read My Blog
              </a>
              <a
                href="#resume"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                → Download Resume
              </a>
              <a
                href="#contact"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                → Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
