// Purpose: Present contact details and quick links.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";

interface ContactSectionProps {
  email?: string;
  location?: string;
}

/**
 * Displays contact information and navigation shortcuts.
 */
const ContactSection: React.FC<ContactSectionProps> = ({
  email = "john.doe@example.com",
  location = "San Francisco, CA",
}) => {
  return (
    // Contact section wrapper
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Let's Connect
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a recent Computer Science graduate passionate about web development and eager to start
            my career in software engineering. I'm looking for opportunities to apply my skills and
            learn from experienced developers.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                📧
              </div>
              <a
                href={`mailto:${email}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                📍
              </div>
              <span className="text-gray-600 dark:text-gray-300">{location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                💼
              </div>
              <span className="text-gray-600 dark:text-gray-300">Open to opportunities</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a
              href="#projects"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              → View My Projects
            </a>
            <a
              href="#blog"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              → Read My Blog
            </a>
            <a
              href="#resume"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              → Download Resume
            </a>
            <a
              href="#contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              → Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

