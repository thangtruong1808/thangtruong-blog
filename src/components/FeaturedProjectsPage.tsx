// Purpose: Standalone page to showcase featured projects.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import FeaturedProjectsSection from "./blog/FeaturedProjectsSection";
import type { Project } from "./blog/types";
import { fetchProjects } from "./blog/data/projects";

/**
 * Loads projects asynchronously and renders the projects section.
 */
const FeaturedProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    void load();
  }, []);

  return (
    // Projects page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FeaturedProjectsSection projects={projects} />
    </div>
  );
};

export default FeaturedProjectsPage;

