// Purpose: Contact page composed of reusable cards.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useEffect, useState } from "react";
import ContactFormCard from "./contact/ContactFormCard";
import ContactInfoCard from "./contact/ContactInfoCard";
import AvailabilityCard from "./contact/AvailabilityCard";
import type { ContactInfoItem } from "./contact/contactData";
import { fetchContactInfo } from "./contact/contactData";

/**
 * Loads contact data asynchronously and renders contact page sections.
 */
const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfoItem[]>([]);

  useEffect(() => {
    const loadContactData = async () => {
      const info = await fetchContactInfo();
      setContactInfo(info);
    };

    void loadContactData();
  }, []);

  return (
    // Contact page wrapper
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm always interested in hearing about new opportunities and exciting projects. Whether you
          have a question or just want to say hi, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactFormCard />
        <div className="space-y-8">
          <ContactInfoCard contactInfo={contactInfo} />
          <AvailabilityCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
