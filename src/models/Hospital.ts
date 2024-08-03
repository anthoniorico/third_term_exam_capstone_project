// src/models/Hospital.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IHospital extends Document {
  name: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
}

const HospitalSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  services: { type: [String], required: true },
});

export default mongoose.models.Hospital || mongoose.model<IHospital>('Hospital', HospitalSchema);