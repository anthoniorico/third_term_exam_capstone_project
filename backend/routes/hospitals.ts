import { Router } from 'express';
import { createHospital, getHospitals, updateHospital, deleteHospital, getHospitalById } from '../controllers/hospitalController';

const router = Router();

// Route to get all hospitals
router.get('/', getHospitals);

// Route to get a single hospital by ID
router.get('/:id', getHospitalById);

// Route to create a new hospital
router.post('/', createHospital);

// Route to update a hospital by ID
router.put('/:id', updateHospital);

// Route to delete a hospital by ID
router.delete('/:id', deleteHospital);

export default router;