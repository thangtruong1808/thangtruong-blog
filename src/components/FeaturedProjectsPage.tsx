// Purpose: Standalone page to showcase featured projects with filtering.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import FeaturedProjectsSection from "./blog/FeaturedProjectsSection";
import type { Project } from "./blog/types";
import { fetchProjects } from "./blog/data/projects";

type FilterType = "All" | "Frontend" | "Full-stack";

/**
 * Loads projects asynchronously and renders the projects section with filtering.
 */
const FeaturedProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setFilteredProjects(data);
    };
    void load();
  }, []);

  /**
   * Filters projects based on the selected category.
   */
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === filter
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    // Projects page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to my portfolio! Here you'll find a collection of projects that
          showcase my skills in frontend and full-stack development. Each project
          represents real-world challenges solved with modern technologies and best
          practices. Feel free to explore and discover the details behind each
          creation.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {(["All", "Frontend", "Full-stack"] as FilterType[]).map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${activeFilter === filter
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <FeaturedProjectsSection projects={filteredProjects} />
    </div>
  );
};

export default FeaturedProjectsPage;

