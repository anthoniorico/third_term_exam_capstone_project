import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();

interface Config {
  port: number;
  mongoURI: string;
  jwtSecret: string;
  nodeEnv: string;
  // Add more configurations as needed
}

const config: Config = {
  port: parseInt(process.env.PORT || '5000', 10),
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdatabase',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  nodeEnv: process.env.NODE_ENV || 'development',
  // Add more configurations as needed
};

export default config;