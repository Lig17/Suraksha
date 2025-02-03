
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HealthCard from '../components/HealthCard';
import AlertBanner from '../components/AlertBanner';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <AlertBanner message="COVID-19 outbreak detected in region X" type="error" />
        <div className="grid grid-cols-2 gap-4">
          <HealthCard title="Heart Rate" value="72" unit="bpm" />
          <HealthCard title="Blood Pressure" value="120/80" unit="mmHg" />
          <HealthCard title="Oxygen Level" value="98" unit="%" />
          <HealthCard title="Temperature" value="36.6" unit="°C" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
