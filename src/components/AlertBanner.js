import React from 'react';

const AlertBanner = ({ message, type }) => {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-yellow-400';
  return (
    <div className={`text-white p-4 ${bgColor} rounded-md shadow-md my-2`}>
      {message}
    </div>
  );
};

export default AlertBanner;
