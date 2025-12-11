// Purpose: Collect newsletter subscriptions with async handler.
// Author: Thang Truong
// Date: 2025-12-11
import React, { useState } from "react";

/**
 * Handles newsletter subscription submission asynchronously.
 */
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  /**
   * Submits the email address asynchronously to mimic API behavior.
   */
  const handleSubscribe = async () => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("success");
  };

  return (
    // Newsletter section wrapper
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-blue-100 mb-6 max-w-md mx-auto">
        Get the latest articles and insights delivered straight to your inbox.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={async (event) => {
            setStatus("idle");
            await Promise.resolve(setEmail(event.target.value));
          }}
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          onClick={async () => {
            await handleSubscribe();
          }}
          disabled={!email || status === "loading"}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : status === "success" ? "Subscribed!" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;

