// -------------------------------------------------
// Booking Routes
// API endpoints for managing customer bookings
// -------------------------------------------------

const express = require('express');
const router = express.Router();
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} = require('../controllers/bookingController');

// GET /api/bookings       — Get all bookings (Admin)
// POST /api/bookings      — Create a new booking (Public)
router.route('/').get(getBookings).post(createBooking);

// PUT /api/bookings/:id   — Update booking status (Admin)
// DELETE /api/bookings/:id — Delete a booking (Admin)
router.route('/:id').put(updateBookingStatus).delete(deleteBooking);

module.exports = router;
