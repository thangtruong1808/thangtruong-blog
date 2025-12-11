import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

interface NavBarProps {
  logo?: string;
  categories?: string[];
  userName?: string;
  userAvatar?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  logo = "Logo",
  categories = ["Home", "Products", "Services", "About", "Contact"],
  userName = "User",
  userAvatar = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getCategoryPath = (category: string) => {
    switch (category.toLowerCase()) {
      case "home":
        return "/";
      case "about":
        return "/about";
      case "projects":
        return "/projects";
      case "skills":
        return "/skills";
      case "education":
        return "/education";
      case "contact":
        return "/contact";
      default:
        return `/${category.toLowerCase()}`;
    }
  };

  const isActiveLink = (category: string) => {
    const path = getCategoryPath(category);
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              {logo}
            </Link>
          </div>

          {/* Desktop Categories */}
          <div className="hidden md:flex space-x-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={getCategoryPath(category)}
                className={`font-medium transition-colors duration-200 ${isActiveLink(category)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* User Profile and Theme Switch */}
          <div className="flex items-center space-x-4">
            {/* Theme Switch */}
            <ThemeSwitch className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" />

            {/* User Avatar and Name */}
            <div className="flex items-center space-x-2">
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt={userName}
                  className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {userName.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="hidden sm:block text-gray-700 dark:text-gray-300 font-medium">
                {userName}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={getCategoryPath(category)}
                  className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${isActiveLink(category)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
