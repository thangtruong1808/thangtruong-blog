// Purpose: Display categorized skill ratings.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useMemo } from "react";
import type { Skill } from "./types";

interface SkillsSectionProps {
  skills: Skill[];
}

/**
 * Shows categorized skills with simple star ratings.
 */
const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const categories = useMemo(
    () => ["Frontend", "Backend", "Database", "Tools", "Cloud", "AICodeAgent"],
    []
  );

  const getSkillLevel = (level: number) => "★".repeat(level) + "☆".repeat(5 - level);

  return (
    // Skills section wrapper
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
            <div className="space-y-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-yellow-500 text-sm">{getSkillLevel(skill.level)}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

