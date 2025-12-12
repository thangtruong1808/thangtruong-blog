// Purpose: Standalone page showing professional experience with header description.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

/**
 * Fetches professional experience entries asynchronously.
 */
const fetchExperiences = async (): Promise<Experience[]> => {
  return [
    {
      title: "Student Mentor",
      company: "Swinburne University - Melbourne - Victoria, Australia",
      period: "July 2022 - May 2025",
      description:
        "Selected as a mentor to support new students in navigating Canvas, academic integrity, assignments, discussions, referencing, and weekly readings; provided study tips, answered questions, and guided assignment planning.",
    },
    {
      title: "Transport Pelletizer",
      company: "ALDI Distribution Warehouse - Truganina - Melbourne - Victoria, Australia",
      period: "Oct 2016 - March 2025",
      description:
        "Operated warehouse machinery to build secure pallets, load/unload trailers, and manage stock shipments to stores while maintaining safety and teamwork in a fast-paced environment.",
    },
    {
      title: "Software Developer/Tester",
      company: "Global CyberSoft - HoChiMinh City, Vietnam",
      period: "May 2004 - July 2007",
      description:
        "Built and maintained web applications using PHP and JavaScript frameworks; executed junit, integration, and system testing; collaborated to troubleshoot issues, refine requirements, and deliver on schedule.",
    },
  ];
};

/**
 * Loads and displays professional experience with header description.
 */
const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchExperiences();
      setExperiences(data);
    };
    void load();
  }, []);

  return (
    // Experience page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Throughout my career, I've had the privilege of working in diverse roles that have
          shaped my professional journey. From software development and testing to mentoring
          students and managing warehouse operations, each experience has contributed to my
          growth as a developer and team player. Below you'll find a timeline of my professional
          experiences, highlighting the skills, responsibilities, and achievements I've gained
          along the way.
        </p>
      </div>

      {/* Experience timeline */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{experience.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

