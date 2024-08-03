import React from 'react';
import { render, screen } from '@testing-library/react';
import HospitalList from '../src/components/HospitalList';

const hospitals = [
  { id: 1, name: 'Hospital A', address: '123 Street A', phone: '111-111-1111', email: 'a@hospital.com', services: 'General' },
  { id: 2, name: 'Hospital B', address: '456 Street B', phone: '222-222-2222', email: 'b@hospital.com', services: 'Specialized' }
];

describe('HospitalList Component', () => {
  test('renders without crashing', () => {
    render(<HospitalList hospitals={hospitals} />);
    expect(screen.getByText('Hospital A')).toBeInTheDocument();
    expect(screen.getByText('Hospital B')).toBeInTheDocument();
  });

  test('displays correct hospital information', () => {
    render(<HospitalList hospitals={hospitals} />);
    expect(screen.getByText('123 Street A')).toBeInTheDocument();
    expect(screen.getByText('111-111-1111')).toBeInTheDocument();
    expect(screen.getByText('a@hospital.com')).toBeInTheDocument();
  });
});