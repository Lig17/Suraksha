const express = require('express');
const { getVitals, addVital } = require('../controllers/vitalsController');

const router = express.Router();

router.get('/', getVitals);
router.post('/', addVital);

module.exports = router;
