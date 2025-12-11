// Purpose: Present education call-to-action banner.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";

/**
 * Encourages visitors to connect after viewing education details.
 */
const EducationCTA: React.FC = () => {
  return (
    // Education CTA wrapper
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Start My Career!</h2>
        <p className="text-blue-100 mb-6">
          I'm excited to apply my academic knowledge and skills to real-world projects. I'm looking
          for opportunities to grow, learn, and contribute to innovative teams!
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
};

export default EducationCTA;

