// Purpose: Standalone page to present skills & technologies with header description.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import SkillsSection from "./blog/SkillsSection";
import type { Skill } from "./blog/types";
import { fetchSkills } from "./blog/data/skills";

/**
 * Loads skills asynchronously and renders the skills section with header.
 */
const SkillsPage: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchSkills();
      setSkills(data);
    };
    void load();
  }, []);

  return (
    // Skills page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm passionate about building modern, scalable applications using cutting-edge
          technologies. My expertise spans across frontend and backend development, database
          management, cloud services, and AI-powered tools. Below you'll find a comprehensive
          overview of my technical skills, each rated based on my proficiency and hands-on
          experience. I'm always eager to learn new technologies and stay updated with the
          latest industry trends.
        </p>
      </div>

      <SkillsSection skills={skills} />
    </div>
  );
};

export default SkillsPage;

