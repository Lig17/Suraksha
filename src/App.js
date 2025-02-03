import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Consultation from './pages/Consultation';
import Monitoring from './pages/Monitoring';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/monitoring" element={<Monitoring />} />
      </Routes>
    </div>
  );
};

export default App;
