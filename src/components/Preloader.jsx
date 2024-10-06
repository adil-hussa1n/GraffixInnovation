import React from 'react';

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="flex items-center mb-4">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-600 border-b-4 border-transparent"></div>
      </div>
      <h1 className="text-3xl font-bold text-blue-400 animate-bounce">Loading...</h1>
      <p className="text-lg text-gray-300">Please wait while we load the content.</p>
    </div>
  );
};

export default Preloader;
