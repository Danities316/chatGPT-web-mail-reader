// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');
const chatRoutes = require('./routes/chatRoutes');
const errorHandler = require('./utils/errorHandler');
const dotenv = require('dotenv')
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/emails', emailRoutes);
app.use('/api/chat', chatRoutes);

// Error handler middleware
app.use(errorHandler);

mongoose.set('strictQuery', true);

// Connect to MongoDB database
const DB_URI = process.env.DB_CONNECTION_STRING;
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
