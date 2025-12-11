// Purpose: Show contact details and social links.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";
import type { ContactInfoItem, SocialLinkItem } from "./contactData";

interface ContactInfoCardProps {
  contactInfo: ContactInfoItem[];
  socialLinks: SocialLinkItem[];
}

/**
 * Renders contact methods and social profiles.
 */
const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ contactInfo, socialLinks }) => {
  return (
    // Contact info card wrapper
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Information
        </h2>
        <div className="space-y-6">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                {info.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {info.title}
                </h3>
                <a
                  href={info.link}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h2>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;

