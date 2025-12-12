// Purpose: Render site footer with navigation links, social media, and site information.
// Author: Thang Truong
// Date: 2025-12-11
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FooterProps {
  categories: string[];
}

/**
 * Social media links configuration with official brand colors.
 */
const socialMedia = [
  {
    name: "LinkedIn",
    href: import.meta.env.VITE_LINKEDIN_URL ?? "",
    icon: FaLinkedin,
    color: "text-[#0A66C2] hover:opacity-80",
  },
  {
    name: "Facebook",
    href: import.meta.env.VITE_FACEBOOK_URL ?? "",
    icon: FaFacebook,
    color: "text-[#1877F2] hover:opacity-80",
  },
  {
    name: "GitHub",
    href: import.meta.env.VITE_GITHUB_URL ?? "",
    icon: FaGithub,
    color: "text-gray-600 dark:text-gray-400 hover:opacity-80",
  },
];

/**
 * Renders the site footer with navigation, social links, and site information.
 */
const Footer: React.FC<FooterProps> = ({ categories }) => {
  return (
    // Footer wrapper
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Navigation links */}
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {categories.map((item) => (
            <div key={item} className="pb-6">
              <Link
                to={
                  item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
                }
                className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        {/* Social media links */}
        <div className="mt-10 flex justify-center space-x-10">
          {socialMedia
            .filter((item) => Boolean(item.href))
            .map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className={`h-6 w-6 transition-colors duration-300 ${item.color}`}
                  aria-hidden="true"
                />
              </a>
            ))}
        </div>

        {/* Site information */}
        <div className="mt-10 text-center text-sm leading-5 text-gray-500 dark:text-gray-400">
          <p>Thang Truong's blog Version 1.0. Built with ❤️ by Thang Truong</p>
          <p className="mt-2">
            Deployed on Vercel as live website
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
