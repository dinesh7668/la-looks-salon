// -------------------------------------------------
// Express Server — LA Looks Salon Backend
// Main entry point for the backend API
// -------------------------------------------------

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// ----- Middleware -----
// Enable CORS for frontend (React runs on port 3000)
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// ----- API Routes -----
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Root route — API health check
app.get('/', (req, res) => {
  res.json({
    message: '💇 LA Looks Salon API is running...',
    endpoints: {
      services: 'GET /api/services',
      bookings: 'GET /api/bookings',
      createBooking: 'POST /api/bookings',
    },
  });
});

// ----- Start Server -----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 API Endpoints:`);
  console.log(`   GET  /api/services`);
  console.log(`   POST /api/bookings`);
  console.log(`   GET  /api/bookings\n`);
});
