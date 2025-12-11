import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FooterProps {
  companyName: string;
  categories: string[];
}

const socialMedia = [
  {
    name: "LinkedIn",
    href: import.meta.env.VITE_LINKEDIN_URL ?? "",
    icon: FaLinkedin,
    color: "text-[#0A66C2] hover:opacity-80", // Official LinkedIn blue
  },
  {
    name: "Facebook",
    href: import.meta.env.VITE_FACEBOOK_URL ?? "",
    icon: FaFacebook,
    color: "text-[#1877F2] hover:opacity-80", // Official Facebook blue
  },
  {
    name: "GitHub",
    href: import.meta.env.VITE_GITHUB_URL ?? "",
    icon: FaGithub,
    color: "text-gray-600 dark:text-gray-400 hover:opacity-80",
  },
];

const Footer = ({ companyName, categories }: FooterProps) => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
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
        <p className="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
