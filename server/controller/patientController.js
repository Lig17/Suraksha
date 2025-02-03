const { db } = require('../firebaseConfig');
const { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } = require('firebase/firestore');

exports.getAllPatients = async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'patients'));
    const patients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPatient = async (req, res) => {
  try {
    const newPatient = req.body;
    const docRef = await addDoc(collection(db, 'patients'), newPatient);
    res.status(201).json({ id: docRef.id, ...newPatient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const patientRef = doc(db, 'patients', id);
    await updateDoc(patientRef, updatedData);
    res.status(200).json({ id, ...updatedData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteDoc(doc(db, 'patients', id));
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};