import request from 'supertest';
import app from '../app'; // Adjust path based on your folder structure
import  connectDB  from '../connectDB'; // Adjust path based on your folder structure
import mongoose from 'mongoose';

describe('API Endpoints', () => {
  // Before all tests, connect to the database
  beforeAll(async () => {
    await connectDB();
    await mongoose.connection.db.dropDatabase(); // Reset database
  });

  // Test fetching all hospitals
  it('should fetch all hospitals', async () => {
    const response = await request(app).get('/api/hospitals');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test fetching a single hospital by ID
  it('should fetch a single hospital by ID', async () => {
    const hospitalData = {
      name: 'Test Hospital',
      address: '123 Test Street',
      phone: '1234567890',
      email: 'test@hospital.com',
      services: ['General'],
    };

    const createdHospital = await request(app)
      .post('/api/hospitals')
      .send(hospitalData);

    const hospitalId = createdHospital.body._id;

    const response = await request(app).get(`/api/hospitals/${hospitalId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', hospitalId);
    expect(response.body).toHaveProperty('name', hospitalData.name);
  });

  // Test creating a new hospital
  it('should create a new hospital', async () => {
    const hospitalData = {
      name: 'New Hospital',
      address: '456 New Street',
      phone: '0987654321',
      email: 'new@hospital.com',
      services: ['Cardiology'],
    };

    const response = await request(app)
      .post('/api/hospitals')
      .send(hospitalData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('name', hospitalData.name);
  });

  // Test fetching a non-existent hospital (should return 404)
  it('should return 404 for a non-existent hospital', async () => {
    const response = await request(app).get('/api/hospitals/999');
    expect(response.status).toBe(404);
  });

  // After all tests, close the database connection
  afterAll(async () => {
    await mongoose.connection.close();
  });
});