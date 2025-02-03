import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, 'patients'));
      setPatients(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPatients();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id} className="border-b py-2">
            {patient.name} - {patient.age} years
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;