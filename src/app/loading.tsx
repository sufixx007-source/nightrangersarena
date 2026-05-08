import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/10 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
