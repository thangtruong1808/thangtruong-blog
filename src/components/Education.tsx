// Purpose: Render education journey with modular cards.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import EducationCard from "./education/EducationCard";
import EducationStats from "./education/EducationStats";
import EducationCTA from "./education/EducationCTA";
import type { EducationItem } from "./education/types";
import { fetchEducation } from "./education/educationData";

/**
 * Loads education data asynchronously and displays timeline + stats.
 */
const Education: React.FC = () => {
  const [educationItems, setEducationItems] = useState<EducationItem[]>([]);

  useEffect(() => {
    const loadEducation = async () => {
      const items = await fetchEducation();
      setEducationItems(items);
    };

    void loadEducation();
  }, []);

  return (
    // Education page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Education & Learning
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          My academic journey has provided me with a strong foundation in computer science and
          practical skills in modern web development. Here's my educational background and continuous
          learning path.
        </p>
      </div>

      <div className="space-y-12">
        {educationItems.map((item, index) => (
          <EducationCard
            key={item.id}
            item={item}
            index={index}
            isLast={index === educationItems.length - 1}
          />
        ))}
      </div>

      <EducationStats />
      <EducationCTA />
    </div>
  );
};

export default Education;