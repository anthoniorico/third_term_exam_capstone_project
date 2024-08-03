import request from 'supertest';
import app from '../backend/app';
import { db } from '../backend/db';

describe('API Endpoints', () => {
  beforeAll(async () => {
    await db.sync({ force: true }); // reset database
  });

  it('should fetch all hospitals', async () => {
    const response = await request(app).get('/api/hospitals');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should fetch a single hospital by ID', async () => {
    // First, create a hospital
    const hospitalData = {
      name: 'Test Hospital',
      address: '123 Test Street',
      phone: '1234567890',
      email: 'test@hospital.com',
      services: 'General'
    };

    const createdHospital = await request(app)
      .post('/api/hospitals')
      .send(hospitalData);

    const hospitalId = createdHospital.body.id;

    const response = await request(app).get(`/api/hospitals/${hospitalId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', hospitalId);
    expect(response.body).toHaveProperty('name', hospitalData.name);
  });

  it('should create a new hospital', async () => {
    const hospitalData = {
      name: 'New Hospital',
      address: '456 New Street',
      phone: '0987654321',
      email: 'new@hospital.com',
      services: 'Cardiology'
    };

    const response = await request(app)
      .post('/api/hospitals')
      .send(hospitalData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name', hospitalData.name);
  });

  it('should return 404 for a non-existent hospital', async () => {
    const response = await request(app).get('/api/hospitals/999');
    expect(response.status).toBe(404);
  });

  afterAll(async () => {
    await db.close();
  });
});