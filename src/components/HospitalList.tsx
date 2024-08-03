import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../app/globals.css';

interface Hospital {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  services: string;
}

const HospitalList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals');
        setHospitals(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching hospitals');
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Hospital List</h1>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <h2>{hospital.name}</h2>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>
            <p>{hospital.email}</p>
            <p>{hospital.services}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;