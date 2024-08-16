import { Router } from 'express';
import Hospital from '../models/Hospital';
import { createHospital } from '../controllers/hospitalController';

const router = Router();

// Example route to get all hospitals
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hospitals' });
  }
});

// Example route to create a new hospital
router.post('/', async (req, res) => {
  try {
    const newHospital = new Hospital(req.body);
    const savedHospital = await newHospital.save();
    res.status(201).json(savedHospital);
  } catch (error) {
    res.status(400).json({ message: 'Error creating hospital' });
  }
});

// Add more routes as needed...

export default router;