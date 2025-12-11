// Purpose: Show key education statistics.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";

/**
 * Displays summary statistics for education journey.
 */
const EducationStats: React.FC = () => {
  const stats = [
    { value: "3.8", label: "GPA Score", accent: "text-blue-600 dark:text-blue-400" },
    { value: "20+", label: "Courses Completed", accent: "text-green-600 dark:text-green-400" },
    { value: "10+", label: "Projects Built", accent: "text-purple-600 dark:text-purple-400" },
    { value: "4", label: "Years of Study", accent: "text-yellow-600 dark:text-yellow-400" },
  ];

  return (
    // Education stats wrapper
    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
        >
          <div className={`text-3xl font-bold mb-2 ${stat.accent}`}>{stat.value}</div>
          <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default EducationStats;

