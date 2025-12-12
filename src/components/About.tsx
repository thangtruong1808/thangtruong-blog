import React from "react";

interface AboutProps {
  authorName: string;
  authorBio: string;
  authorAvatar?: string;
}

const About: React.FC<AboutProps> = ({ authorName, authorBio, authorAvatar = "" }) => {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={authorName}
              className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
              {authorName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About {authorName}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {authorBio}
        </p>
      </div>

      {/* Personal Story */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          My Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              I'm a passionate developer who loves creating meaningful digital
              experiences. My journey in web development started with curiosity
              about how websites work, which quickly evolved into a deep passion
              for building applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies. When I'm not coding, you
              can find me exploring new frameworks, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              I'm particularly interested in creating user-friendly interfaces
              and scalable backend solutions. My goal is to build applications
              that not only work flawlessly but also provide an excellent user
              experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              I'm always open to new opportunities and collaborations. If you're
              interested in working together or just want to chat about
              technology, feel free to reach out!
            </p>
          </div>
        </div>
      </div>



      {/* Personal Interests */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Personal Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              When I'm Not Coding
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                • Reading tech blogs and staying updated with industry trends
              </li>
              <li>• Writing technical blog posts and tutorials</li>
              <li>• Camping and hiking from favorite places in Victoria, Australia</li>
              <li>• Badminton is my favorite sport</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Goals
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Master advanced JavaScript and associated frameworks and libraries</li>
              <li>• Contribute to major open-source projects</li>
              <li>• Build a successful SaaS product</li>
              <li>• Mentor junior developers and share knowledge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
