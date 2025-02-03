const { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const { auth } = require('../firebaseConfig');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    res.status(201).json({ user: userCredential.user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      res.status(200).json({ user: userCredential.user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.logout = async (req, res) => {
    try {
      await signOut(auth);
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  