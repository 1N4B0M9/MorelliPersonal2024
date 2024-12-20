import React, { useState, useEffect } from 'react';
import ThreeModel from "./ThreeDeeFiles/ThreeIndex";
import { motion } from 'framer-motion';


const Home = ({ LeftPage, RightPage}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Three.js model as a full-page background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeModel />
      </div> */}

      {/* Foreground content */}
      <div className={`relative flex h-screen ${isMobile ? 'flex-col' : ''} z-1 h-50`}>
      <div
          className={`w-1/4 shadow-lg p-4 overflow-y-auto m-2 h-100 ${
            isMobile ? 'w-full' : 'ml-2'
          }`}
        >
          <LeftPage className = "h-50"/>
        </div>
        <motion.div
      className={`w-3/4 bg-zinc-800 shadow-lg rounded-lg p-4 overflow-y-auto m-2 ml-0 ${isMobile ? 'w-full' : ''}`}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
        <RightPage />
      </motion.div>
      </div>
    </>
  );
};

export default Home;