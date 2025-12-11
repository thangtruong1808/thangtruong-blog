// Purpose: Render a single education timeline entry.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";
import type { EducationItem } from "./types";

interface EducationCardProps {
  item: EducationItem;
  index: number;
  isLast: boolean;
}

/**
 * Displays education details in a timeline card.
 */
const EducationCard: React.FC<EducationCardProps> = ({ item, index, isLast }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "bachelor":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "certification":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "course":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "workshop":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    // Education card wrapper
    <div className="relative">
      {!isLast && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>}
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {index + 1}
          </div>
        </div>
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.location} • {item.period}
              </p>
              {item.gpa !== "N/A" && (
                <p className="text-gray-500 dark:text-gray-400 text-sm">GPA: {item.gpa}</p>
              )}
            </div>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 sm:mt-0 ${getTypeColor(
                item.type
              )}`}
            >
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Courses</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {item.courses.map((course) => (
                <div key={course} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Academic Projects
            </h4>
            <ul className="space-y-2">
              {item.projects.map((project) => (
                <li key={project} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{project}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Achievements & Recognition
            </h4>
            <ul className="space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

