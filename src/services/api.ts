import axios from 'axios';

const API_URL = '/api/hospitals';

export const fetchHospitals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createHospital = async (hospitalData: any) => {
  const response = await axios.post(API_URL, hospitalData);
  return response.data;
};

export const updateHospital = async (id: string, hospitalData: any) => {
  const response = await axios.put(API_URL, { id, ...hospitalData });
  return response.data;
};

export const deleteHospital = async (id: string) => {
  const response = await axios.delete(API_URL, { data: { id } });
  return response.data;
};