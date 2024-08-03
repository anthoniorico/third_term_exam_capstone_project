import { validateHospitalData } from '../src/utils/validation';

describe('Validation Utils', () => {
  it('should validate correct hospital data', () => {
    const hospitalData = {
      name: 'Valid Hospital',
      address: '123 Valid Street',
      phone: '1234567890',
      email: 'valid@hospital.com',
      services: 'General'
    };

    const result = validateHospitalData(hospitalData);
    expect(result).toBe(true);
  });

  it('should invalidate hospital data with missing fields', () => {
    const hospitalData = {
      name: '',
      address: '123 Valid Street',
      phone: '1234567890',
      email: 'valid@hospital.com',
      services: 'General'
    };

    const result = validateHospitalData(hospitalData);
    expect(result).toBe(false);
  });

  it('should invalidate hospital data with incorrect email format', () => {
    const hospitalData = {
      name: 'Valid Hospital',
      address: '123 Valid Street',
      phone: '1234567890',
      email: 'invalid-email',
      services: 'General'
    };

    const result = validateHospitalData(hospitalData);
    expect(result).toBe(false);
  });

  it('should invalidate hospital data with incorrect phone format', () => {
    const hospitalData = {
      name: 'Valid Hospital',
      address: '123 Valid Street',
      phone: 'invalid-phone',
      email: 'valid@hospital.com',
      services: 'General'
    };

    const result = validateHospitalData(hospitalData);
    expect(result).toBe(false);
  });
});