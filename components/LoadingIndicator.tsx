import React from 'react';

export default function LoadingIndicator() {
  return (
    <div>
      <span className="loader w-16 h-16 rounded-full bg-white shadow-loader animate-flash absolute left-1/2 transform -translate-x-1/2"></span>
    </div>
  );
}
