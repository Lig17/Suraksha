import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HealthCard from '../components/HealthCard';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Monitoring = () => {
  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'vitals'), (snapshot) => {
      setVitals(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold">Real-Time Health Monitoring</h1>
        <div className="grid grid-cols-2 gap-4">
          {vitals.map((vital) => (
            <HealthCard key={vital.id} title={vital.type} value={vital.value} unit={vital.unit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
