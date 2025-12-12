// Purpose: Display author hero details with social links and summary stats.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";
import type { Project } from "./types";

interface HeroSectionProps {
  authorName: string;
  authorBio: string;
  authorAvatar?: string;
  projects: Project[];
}

/**
 * Renders the hero section with author info and quick stats.
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  authorName,
  authorBio,
  authorAvatar = "",
  projects,
}) => {
  return (
    // Hero section wrapper
    <div className="text-center mb-16">
      <div className="flex justify-center mb-6">
        {authorAvatar ? (
          <img
            src={authorAvatar}
            alt={authorName}
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
            {authorName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium border-2 border-green-300 dark:border-green-700 shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          🚀 Open to Work
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm {authorName}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        {authorBio}
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
          📝 {projects.length} Featured Projects
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
          🎓 Recent Bachelor of Information and Communication Technology Graduate
        </span>
      </div>
    </div>
  );
};

export default HeroSection;

