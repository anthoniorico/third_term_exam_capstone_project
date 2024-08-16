// src/models/Hospital.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IHospital extends Document {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
}

const HospitalSchema: Schema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  services: { type: [String], required: true },
});

const Hospital= mongoose.models.Hospital || mongoose.model<IHospital>('Hospital', HospitalSchema);

export default Hospital;