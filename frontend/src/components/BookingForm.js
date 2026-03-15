// -------------------------------------------------
// BookingForm Component
// Form for booking appointments
// -------------------------------------------------

import React, { useState, useEffect } from 'react';
import { getServices, createBooking } from '../services/api';
import './BookingForm.css';

function BookingForm({ preSelectedServiceId, preSelectedServiceName }) {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    serviceId: preSelectedServiceId || '',
    serviceName: preSelectedServiceName || '',
    appointmentDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Fetch services for dropdown
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };
    fetchServices();
  }, []);

  // Update form when pre-selected service changes
  useEffect(() => {
    if (preSelectedServiceId && preSelectedServiceName) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preSelectedServiceId,
        serviceName: preSelectedServiceName,
      }));
    }
  }, [preSelectedServiceId, preSelectedServiceName]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'serviceId') {
      // When service is selected, also set the service name
      const selectedService = services.find((s) => s._id === value);
      setFormData({
        ...formData,
        serviceId: value,
        serviceName: selectedService ? selectedService.name : '',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Basic validation
    if (!formData.customerName || !formData.phone || !formData.serviceId || !formData.appointmentDate) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Phone validation (Indian mobile number)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setError('Please enter a valid 10-digit mobile number');
      setLoading(false);
      return;
    }

    try {
      await createBooking(formData);
      setSuccess(true);
      setFormData({
        customerName: '',
        phone: '',
        serviceId: '',
        serviceName: '',
        appointmentDate: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <form className="booking-form" onSubmit={handleSubmit} id="booking-form">
      <h3 className="booking-form-title">📋 Book Your Appointment</h3>
      <p className="booking-form-subtitle">
        Fill in the details below and we'll confirm your appointment.
      </p>

      {/* Success Message */}
      {success && (
        <div className="form-message form-success" id="booking-success-msg">
          <span className="message-icon">✅</span>
          <div>
            <strong>Booking Confirmed!</strong>
            <p>Thank you for choosing LA Looks Salon. We'll see you soon!</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="form-message form-error" id="booking-error-msg">
          <span className="message-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Customer Name */}
      <div className="form-group">
        <label htmlFor="customerName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          className="form-input"
          placeholder="Enter your full name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          placeholder="Enter 10-digit mobile number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Service Selection */}
      <div className="form-group">
        <label htmlFor="serviceId" className="form-label">
          Choose Service
        </label>
        <select
          id="serviceId"
          name="serviceId"
          className="form-input form-select"
          value={formData.serviceId}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a Service --</option>
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name} — ₹{service.price} ({service.category})
            </option>
          ))}
        </select>
      </div>

      {/* Appointment Date */}
      <div className="form-group">
        <label htmlFor="appointmentDate" className="form-label">
          Appointment Date
        </label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          className="form-input"
          min={today}
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary booking-submit-btn"
        disabled={loading}
        id="booking-submit-btn"
      >
        {loading ? '⏳ Booking...' : '✨ Confirm Booking'}
      </button>
    </form>
  );
}

export default BookingForm;
