import axios from 'axios';

const AUTH_API_URL = '/api/auth'; // Adjust this based on your actual API route

interface AuthResponse {
  user: {
    _id: string;
    email: string;
  };
  token: string;
}

// Login user
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${AUTH_API_URL}/login, { email, password }`);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Failed to login');
  }
};

// Register user
export const register = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${AUTH_API_URL}/register, { email, password }`);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw new Error('Failed to register');
  }
};