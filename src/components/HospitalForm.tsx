import React, { useState } from 'react';
import axios from 'axios';
import '../app/globals.css';


interface HospitalFormProps {
  onHospitalAdded: () => void;
  hospital?: {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    services: string;
  };
}

const HospitalForm: React.FC<HospitalFormProps> = ({ onHospitalAdded, hospital }) => {
  const [name, setName] = useState<string>(hospital?.name || '');
  const [address, setAddress] = useState<string>(hospital?.address || '');
  const [phone, setPhone] = useState<string>(hospital?.phone || '');
  const [email, setEmail] = useState<string>(hospital?.email || '');
  const [services, setServices] = useState<string>(hospital?.services || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hospitalData = { name, address, phone, email, services };

    try {
      if (hospital) {
        await axios.put(`/api/hospitals/${hospital.id}`, hospitalData);
      } else {
        await axios.post('/api/hospitals', hospitalData);
      }
      onHospitalAdded();
    } catch (error) {
      console.error('Error saving hospital:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Services</label>
        <textarea
          value={services}
          onChange={(e) => setServices(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">{hospital ? 'Update' : 'Add'} Hospital</button>
    </form>
  );
};

export default HospitalForm;