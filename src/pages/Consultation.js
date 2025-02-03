import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PatientList from '../components/PatientList';

const Consultation = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Virtual Consultation</h1>
        <PatientList />
      </div>
    </div>
  );
};

export default Consultation;