// backend/routes/hospitals.js
const express = require('express');
const Hospital = require('../models/Hospital');
const dbConnect = require('../db');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  await dbConnect();

  try {
    const hospitals = await Hospital.find({});
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  await dbConnect();

  try {
    const newHospital = new Hospital(req.body);
    const savedHospital = await newHospital.save();
    res.status(201).json(savedHospital);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;