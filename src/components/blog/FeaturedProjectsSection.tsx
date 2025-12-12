// Purpose: Render featured projects grid.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "./types";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

/**
 * Shows a list of featured projects with links.
 */
const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ projects }) => {
  return (
    // Featured projects wrapper
    <section className="mb-16">
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No projects found for the selected filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/projects/${project.id}`} className="block">
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 border-b-2 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                )}
              </Link>
              <div className="p-6">
                <Link
                  to={`/projects/${project.id}`}
                  className="block mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-justify">
                  {project.description}
                </p>
                {/* Technologies */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
      )}
    </section>
  );
};

export default FeaturedProjectsSection;

