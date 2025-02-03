import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getPatients = async () => {
  const querySnapshot = await getDocs(collection(db, 'patients'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addPatient = async (patientData) => {
  await addDoc(collection(db, 'patients'), patientData);
};

// src/services/vitalsService.js
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getVitalsRealTime = (callback) => {
  return onSnapshot(collection(db, 'vitals'), (snapshot) => {
    const vitals = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(vitals);
  });
};

export const addVital = async (vitalData) => {
  await addDoc(collection(db, 'vitals'), vitalData);
};