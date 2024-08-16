import config from '../config/config';
import axios from 'axios';

const API_URL = '/api/hospitals';

export interface HospitalData {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
}

export const fetchHospitals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createHospital = async (hospitalData: HospitalData) => {
  const response = await axios.post(API_URL, hospitalData);
  return response.data;
};

export const updateHospital = async (id: string, hospitalData: Partial<HospitalData>) => {
  const response = await axios.put(`${API_URL}/${id}`, hospitalData);
  return response.data;
};

export const deleteHospital = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};