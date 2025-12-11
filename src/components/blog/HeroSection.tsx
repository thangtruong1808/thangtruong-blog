// Purpose: Display author hero details with social links and summary stats.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";
import type { Project } from "./types";

interface HeroSectionProps {
  authorName: string;
  authorBio: string;
  authorAvatar?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  projects: Project[];
}

/**
 * Renders the hero section with author info and quick stats.
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  authorName,
  authorBio,
  authorAvatar = "",
  location = "Truganina, Melbourne, Victoria, Australia",
  email = import.meta.env.VITE_AUTHOR_EMAIL ?? "",
  github = import.meta.env.VITE_GITHUB_URL ?? "",
  linkedin = import.meta.env.VITE_LINKEDIN_URL ?? "",
  facebook = import.meta.env.VITE_FACEBOOK_URL ?? "",
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
      <div className="flex justify-center space-x-4">
        <a
          href={github}
          className="text-[#181717] dark:text-[#181717] hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="GitHub profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href={linkedin}
          className="text-[#0A66C2] dark:text-[#0A66C2] hover:text-[#004182] dark:hover:text-[#004182] transition-colors"
          aria-label="LinkedIn profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href={facebook}
          className="text-[#1877F2] dark:text-[#1877F2] hover:text-[#0f5dc8] dark:hover:text-[#0f5dc8] transition-colors"
          aria-label="Facebook profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H7v-3h3.5V9.5c0-3.4 2-5.3 5-5.3 1.45 0 2.97.26 2.97.26v3.3h-1.67c-1.65 0-2.16 1.02-2.16 2.07V12H18l-.56 3h-2.6v7A10 10 0 0022 12z" />
          </svg>
        </a>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
          </svg>
          <span>{email}</span>
        </a>
        <span className="text-sm text-gray-600 dark:text-gray-300">|</span>
        <span className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 22s7-5.373 7-12A7 7 0 105 10c0 6.627 7 12 7 12z"
            />
            <circle cx="12" cy="10" r="2" />
          </svg>
          <span>{location}</span>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;

