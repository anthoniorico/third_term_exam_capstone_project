// backend/app.js
const express = require('express');
const { connectDB } = require('./db');
const hospitalRoutes = require('./routes/hospital');
const userRoutes = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

dotenv.config();
const hospitalRoutes = require('./routes/hospitals');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/hospitals', hospitalRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});