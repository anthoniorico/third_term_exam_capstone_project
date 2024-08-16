import config from './config/config';
import express, { ErrorRequestHandler } from 'express';
import connectDB from './connectDB';
import dotenv from 'dotenv';
import hospitalRoutes from './routes/hospitalRoutes'; // Assuming you have routes defined in the routes folder

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/api/hospitals', hospitalRoutes); // Use the existing 'hospitals.ts' file in the routes folder

// Error handling middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  };
  
  app.use(errorHandler);
  
  // Rest of the app configuration...

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;