import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Health Platform</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/consultation" className="hover:underline">Consultation</Link>
        <Link to="/monitoring" className="hover:underline">Monitoring</Link>
      </div>
    </nav>
  );
};

export default Navbar;