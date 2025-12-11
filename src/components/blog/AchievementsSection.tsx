// Purpose: Present academic achievements in a grid.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";
import type { Achievement } from "./types";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

/**
 * Displays academic achievements.
 */
const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    // Achievements section wrapper
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {achievement.title}
            </h3>
            {achievement.university && (
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">{achievement.university}</p>
            )}
            <p className="text-gray-600 dark:text-gray-300 mb-2">{achievement.description}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;

