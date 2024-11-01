import React from 'react';

const TwoPageLayout = ({ LeftPage, RightPage }) => {
  return (
    <div className="flex h-screen">
      {/* Left page takes up 1/4 of the width */}
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
        <LeftPage />
      </div>

      {/* Right page takes up 3/4 of the width */}
      <div className="w-3/4 bg-white p-4 overflow-y-auto">
        <RightPage />
      </div>
    </div>
  );
};

export default TwoPageLayout;