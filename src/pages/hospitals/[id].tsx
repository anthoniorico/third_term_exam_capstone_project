import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Hospital {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  services: string;
}

const HospitalDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchHospital = async () => {
        try {
          const response = await axios.get(`/api/hospitals/${id}`);
          setHospital(response.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

      fetchHospital();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div>
      <h1>{hospital.name}</h1>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Phone:</strong> {hospital.phone}</p>
      <p><strong>Email:</strong> {hospital.email}</p>
      <p><strong>Services:</strong> {hospital.services}</p>
    </div>
  );
};

export default HospitalDetail;