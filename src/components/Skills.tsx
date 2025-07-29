import React from "react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern web technologies.",
      skills: [
        { name: "React", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 85, category: "Frontend" },
        { name: "JavaScript", level: 95, category: "Frontend" },
        { name: "HTML5", level: 95, category: "Frontend" },
        { name: "CSS3", level: 90, category: "Frontend" },
        { name: "Tailwind CSS", level: 85, category: "Frontend" },
        { name: "Next.js", level: 80, category: "Frontend" },
        { name: "Vue.js", level: 75, category: "Frontend" },
      ],
    },
    {
      name: "Backend Development",
      description: "Creating robust server-side applications and APIs.",
      skills: [
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "Express.js", level: 80, category: "Backend" },
        { name: "Python", level: 75, category: "Backend" },
        { name: "MongoDB", level: 80, category: "Backend" },
        { name: "PostgreSQL", level: 75, category: "Backend" },
        { name: "REST APIs", level: 85, category: "Backend" },
        { name: "GraphQL", level: 70, category: "Backend" },
        { name: "Firebase", level: 80, category: "Backend" },
      ],
    },
    {
      name: "Tools & Technologies",
      description:
        "Development tools, version control, and deployment technologies.",
      skills: [
        { name: "Git", level: 90, category: "Tools" },
        { name: "GitHub", level: 85, category: "Tools" },
        { name: "VS Code", level: 95, category: "Tools" },
        { name: "Docker", level: 70, category: "Tools" },
        { name: "AWS", level: 65, category: "Tools" },
        { name: "Figma", level: 75, category: "Tools" },
        { name: "Postman", level: 80, category: "Tools" },
        { name: "Jest", level: 75, category: "Tools" },
      ],
    },
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-400";
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I've developed a diverse set of skills through years of experience and
          continuous learning. Here's an overview of my technical expertise
          across different areas.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {category.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {getLevelText(skill.level)}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${getLevelColor(
                        skill.level
                      )}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Additional Skills & Knowledge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Soft Skills
            </h3>
            <div className="space-y-2">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Time Management",
                "Adaptability",
                "Continuous Learning",
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Methodologies
            </h3>
            <div className="space-y-2">
              {[
                "Agile Development",
                "Scrum",
                "Test-Driven Development",
                "CI/CD",
                "Microservices",
                "RESTful Design",
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Areas of Interest
            </h3>
            <div className="space-y-2">
              {[
                "Machine Learning",
                "Cloud Computing",
                "DevOps",
                "Mobile Development",
                "UI/UX Design",
                "Performance Optimization",
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Journey */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current
            with the latest trends and best practices. I regularly participate
            in online courses, attend conferences, and contribute to open-source
            projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Online Courses
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Tech Conferences
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Open Source
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Reading & Research
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
