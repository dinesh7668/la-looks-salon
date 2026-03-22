// -------------------------------------------------
// Booking Controller
// Handles all booking-related API logic
// -------------------------------------------------

const Booking = require('../models/Booking');
const { sendSMS } = require('../utils/smsService');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
  try {
    const { customerName, phone, serviceId, serviceName, appointmentDate } = req.body;

    // Validate required fields
    if (!customerName || !phone || !serviceId || !serviceName || !appointmentDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const booking = new Booking({
      customerName,
      phone,
      serviceId,
      serviceName,
      appointmentDate,
    });

    const createdBooking = await booking.save();

    // Send SMS Notification
    const formattedDate = new Date(appointmentDate).toLocaleDateString('en-IN');
    const message = `Hello ${customerName}, your booking request for ${serviceName} on ${formattedDate} has been received.`;
    await sendSMS(phone, message);

    res.status(201).json(createdBooking);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data: ' + error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Admin
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate('serviceId', 'name category price')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Admin
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      booking.status = req.body.status || booking.status;
      const updatedBooking = await booking.save();

      let message = '';
      if (booking.status === 'Confirmed') {
        message = `Hello ${booking.customerName}, your booking has been CONFIRMED. See you soon!`;
      } else if (booking.status === 'Completed') {
        message = `Hello ${booking.customerName}, your service has been COMPLETED. Thank you for visiting!`;
      } else if (booking.status === 'Rejected') {
        message = `Hello ${booking.customerName}, your booking request has been REJECTED. Please contact us for more info.`;
      }

      if (message) {
        await sendSMS(booking.phone, message);
      }

      res.json(updatedBooking);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/bookings/:id
// @access  Admin
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      await Booking.deleteOne({ _id: req.params.id });
      res.json({ message: 'Booking removed successfully' });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
};
