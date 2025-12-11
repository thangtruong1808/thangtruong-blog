// Purpose: Standalone page to present skills & technologies.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import SkillsSection from "./blog/SkillsSection";
import type { Skill } from "./blog/types";
import { fetchSkills } from "./blog/data/skills";

/**
 * Loads skills asynchronously and renders the skills section.
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
      <SkillsSection skills={skills} />
    </div>
  );
};

export default SkillsPage;

