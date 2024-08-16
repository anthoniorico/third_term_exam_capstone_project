import { Request, Response, RequestHandler } from 'express';
import Hospital from '../models/Hospital';

// Define the controller functions
export const getHospitals: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const hospitals = await Hospital.find(); // Example logic to fetch hospitals
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hospitals', error });
    }
};

export const getHospitalById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const hospital = await Hospital.findById(req.params.id);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json(hospital);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const createHospital: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { name, city, address, phone, email, services } = req.body;

    try {
        const newHospital = new Hospital({
            name,
            city,
            address,
            phone,
            email,
            services,
        });

        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateHospital: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { name, city, address, phone, email, services } = req.body;

    try {
        const hospital = await Hospital.findById(req.params.id);

        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }

        hospital.name = name || hospital.name;
        hospital.city = city || hospital.city;
        hospital.address = address || hospital.address;
        hospital.phone = phone || hospital.phone;
        hospital.email = email || hospital.email;
        hospital.services = services || hospital.services;

        const updatedHospital = await hospital.save();
        res.status(200).json(updatedHospital);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const deleteHospital: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const hospital = await Hospital.findById(req.params.id);

        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }

        await hospital.remove();
        res.status(200).json({ message: 'Hospital removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};