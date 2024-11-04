import React, { useState, useEffect } from 'react';

const TwoPageLayout = ({ LeftPage, RightPage }) => {
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
    
    <div className={`flex h-screen ${isMobile ? 'flex-col h-screen' : ''}`}>
      {/* Left page takes up 1/4 of the width */}
      <div className={`w-1/4 bg-zinc-900	shadow-lg rounded-lg p-4 overflow-y-auto m-2 ${isMobile ? 'w-full' : ''}`}>
        <LeftPage />
      </div>

      {/* Right page takes up 3/4 of the width */}
      <div className={`w-3/4 bg-zinc-800 shadow-lg rounded-lg p-4 overflow-y-auto m-2 ${isMobile ? 'w-full' : ''}`}>
        <RightPage />
      </div>
    </div>
   
  );
  
};

export default TwoPageLayout;