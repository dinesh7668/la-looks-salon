// -------------------------------------------------
// Axios API Service
// Centralized API calls to the backend
// -------------------------------------------------

import axios from 'axios';

// Base URL for API — points to Express backend
const API_BASE_URL = 'https://la-looks-salon-backend.onrender.com/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ===== Service API Calls =====

// Get all services
export const getServices = async () => {
  const response = await api.get('/services');
  return response.data;
};

// Get single service by ID
export const getServiceById = async (id) => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};

// Create a new service (Admin)
export const createService = async (serviceData) => {
  const response = await api.post('/services', serviceData);
  return response.data;
};

// Delete a service (Admin)
export const deleteService = async (id) => {
  const response = await api.delete(`/services/${id}`);
  return response.data;
};

// ===== Booking API Calls =====

// Create a new booking
export const createBooking = async (bookingData) => {
  const response = await api.post('/bookings', bookingData);
  return response.data;
};

// Get all bookings (Admin)
export const getBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};

// Update booking status (Admin)
export const updateBookingStatus = async (id, status) => {
  const response = await api.put(`/bookings/${id}`, { status });
  return response.data;
};

// Delete a booking (Admin)
export const deleteBooking = async (id) => {
  const response = await api.delete(`/bookings/${id}`);
  return response.data;
};

// ===== Auth API Calls =====
export const loginAdmin = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export default api;
