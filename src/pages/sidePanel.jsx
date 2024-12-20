import Me from "../images/1720401499069.jpg";
import React from "react";
import ButtonMailto from "../tools/emailcicker.jsx";
import LinkedInButton from "../tools/LinkedIn.jsx";

export default function SidePanel() {
  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg p-6 max-w-md mx-auto text-white">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src={Me}
          alt="Nathan Morelli"
          className="w-32 h-32 rounded-full border-4 border-gradient-to-r from-red-500 via-yellow-500 to-blue-500 shadow-md"
        />
      </div>

      {/* About Me Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white mb-2">About Me</h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          I am a Computer Science student at the University of Pittsburgh’s
          David C. Frederick Honors College, passionate about integrating
          computer science with environmental science and finance to drive
          innovative solutions.
        </p>
      </div>

      {/* Currently Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white mb-2">Currently</h1>
        <div className="space-y-2">
          <p className="text-gray-400">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-400 to-blue-500">
              Research Assistant:
            </span>{" "}
            Human-Computer Interaction at the University of Pittsburgh
          </p>
          <p className="text-gray-400">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
              Junior Analyst:
            </span>{" "}
            Information Technology Sector at Panther Equity
          </p>
        </div>
      </div>

      {/* Contact Me Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white mb-4">Contact Me</h1>
        <div className="flex flex-col gap-y-4">
          <ButtonMailto
            label="Email Me"
            mailto="mailto:nbm27@pitt.edu"
          />
          <LinkedInButton
            label="View LinkedIn"
            href="https://www.linkedin.com/in/nathan-morelli/"
          />
        </div>
      </div>
    </div>
  );
}