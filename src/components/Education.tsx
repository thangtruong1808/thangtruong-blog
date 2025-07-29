import React from "react";

interface Education {
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

const Education: React.FC = () => {
  const education: Education[] = [
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
        "Machine Learning Basics"
      ],
      projects: [
        "E-commerce Platform - Full-stack web application",
        "Task Management System - React-based project",
        "Weather API Integration - JavaScript application",
        "Portfolio Website - Responsive design project"
      ],
      achievements: [
        "Graduated with Honors (Cum Laude)",
        "Dean's List for 6 consecutive semesters",
        "Computer Science Department Award",
        "Best Capstone Project Award"
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
        "API Development"
      ],
      projects: [
        "Personal Portfolio Website",
        "Todo List Application",
        "Weather Dashboard",
        "Blog Platform"
      ],
      achievements: [
        "Top 10% of cohort",
        "Perfect attendance record",
        "Mentored 3 junior students",
        "Completed all projects with distinction"
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
        "Time & Space Complexity"
      ],
      projects: [
        "Algorithm Visualization Tool",
        "Pathfinding Algorithm Implementation",
        "Sorting Algorithm Comparison"
      ],
      achievements: [
        "Solved 200+ coding problems",
        "Achieved 'Medium' difficulty proficiency",
        "Participated in weekly coding challenges",
        "Helped 10+ peers with problem-solving"
      ],
      type: "course",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "bachelor":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "certification":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "course":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "workshop":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Education & Learning
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          My academic journey has provided me with a strong foundation in computer science 
          and practical skills in modern web development. Here's my educational background 
          and continuous learning path.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={edu.id} className="relative">
            {/* Timeline Line */}
            {index < education.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            )}

            <div className="flex items-start space-x-6">
              {/* Timeline Dot */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>

              {/* Education Content */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {edu.location} • {edu.period}
                    </p>
                    {edu.gpa !== "N/A" && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 sm:mt-0 ${getTypeColor(
                      edu.type
                    )}`}
                  >
                    {edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {edu.description}
                </p>

                {/* Courses */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Courses
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Academic Projects
                  </h4>
                  <ul className="space-y-2">
                    {edu.projects.map((project, projectIndex) => (
                      <li
                        key={projectIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          {project}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Achievements & Recognition
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            3.8
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            GPA Score
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            20+
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            Courses Completed
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            10+
          </div>
          <div className="text-gray-600 dark:text-gray-300">Projects Built</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
            4
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            Years of Study
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start My Career!</h2>
          <p className="text-blue-100 mb-6">
            I'm excited to apply my academic knowledge and skills to real-world projects. 
            I'm looking for opportunities to grow, learn, and contribute to innovative teams!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education; 