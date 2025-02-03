const { collection: vitalsCollection, getDocs: getVitalsDocs, addDoc: addVitalsDoc } = require('firebase/firestore');

exports.getVitals = async (req, res) => {
  try {
    const snapshot = await getVitalsDocs(vitalsCollection(db, 'vitals'));
    const vitals = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(vitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addVital = async (req, res) => {
  try {
    const newVital = req.body;
    const docRef = await addVitalsDoc(vitalsCollection(db, 'vitals'), newVital);
    res.status(201).json({ id: docRef.id, ...newVital });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};