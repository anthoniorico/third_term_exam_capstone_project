// src/pages/api/hospitals.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import Hospital from '../../models/Hospital';

dbConnect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const hospitals = await Hospital.find({});
        res.status(200).json(hospitals);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
      
    case 'POST':
      try {
        const newHospital = new Hospital(req.body);
        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;