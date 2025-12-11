// Purpose: Show current availability note.
// Author: Thang Truong
// Date: 2025-12-11
import React from "react";

/**
 * Displays availability status for new work.
 */
const AvailabilityCard: React.FC = () => {
  return (
    // Availability card wrapper
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Current Availability</h2>
      <p className="text-blue-100 mb-4">
        I’m currently available for new opportunities, exciting projects and I’m eager to be part of a forward-thinking team. I typically respond to messages within 24 hours.
      </p>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-green-200">Available for new projects</span>
      </div>
    </div>
  );
};

export default AvailabilityCard;

