import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = ({ LeftPage, RightPage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Foreground content */}
      <div className={`relative flex h-screen ${isMobile ? "flex-col" : ""} z-1`}>
        {/* Left Page */}
        <div
          className={`w-1/4 shadow-lg p-4 overflow-y-auto m-2 h-full ${
            isMobile ? "w-full" : "ml-2"
          }`}
        >
          <LeftPage />
        </div>

        {/* Right Page - Render only if not mobile */}
        {!isMobile && (
          <motion.div
            className="w-3/4 flex items-center justify-center shadow-lg rounded-lg p-4 overflow-y-auto m-2 ml-0"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <RightPage />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Home;