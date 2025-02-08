const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const defaultPort = process.env.PORT || 5500;

// Function to start the server on a given port
const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

// Use CORS middleware to allow cross-origin requests from the frontend
 // This will allow all origins. You can configure it to allow specific origins.


// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the URL of your frontend
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define your routes
app.use('/api/auth', authRoutes);


// Root route: handle GET requests to "/"

app.get('/', (req, res) => {

  res.send('Welcome to the Authentication Server');  // Sends a simple message when accessing the root

});

// Try to start the server with error handling
const tryStartServer = async () => {
  try {
    startServer(defaultPort);  // Try to start the server on the default port (5500)
  } catch (err) {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${defaultPort} is already in use. Trying port 5501...`);
      startServer(5501);  // Try port 5501 if defaultPort is in use
    } else {
      console.error('Unexpected error:', err);
    }
  }
};

// Attempt to start the server on the default port
tryStartServer();
