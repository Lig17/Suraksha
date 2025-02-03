import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-64 h-screen p-4">
      <ul>
        <li className="p-2 hover:bg-gray-300 cursor-pointer">Home</li>
        <li className="p-2 hover:bg-gray-300 cursor-pointer">Patients</li>
        <li className="p-2 hover:bg-gray-300 cursor-pointer">Reports</li>
        <li className="p-2 hover:bg-gray-300 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;