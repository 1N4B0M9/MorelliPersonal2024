import React from "react";

const LinkedInButton = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 flex items-center justify-center bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 hover:scale-105 hover:shadow-lg transition-transform duration-200"
    >
      {label}
    </a>
  );
};

export default LinkedInButton;