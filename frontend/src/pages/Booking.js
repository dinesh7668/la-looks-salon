// -------------------------------------------------
// Booking Page
// Allows users to book appointments
// -------------------------------------------------

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import './Booking.css';

function Booking() {
  // Get pre-selected service from URL params (from "Book Now" buttons)
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service') || '';
  const serviceName = searchParams.get('name') || '';

  return (
    <div className="booking-page" id="booking-page">
      {/* Page Header */}
      <section className="page-hero booking-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <h1 className="page-hero-title">Book Appointment</h1>
          <p className="page-hero-subtitle">
            Schedule your beauty session at LA Looks Salon. 
            Choose your service, pick a date, and we'll take care of the rest.
          </p>
        </div>
      </section>

      {/* Booking Content */}
      <section className="booking-content" id="booking-content">
        <div className="container booking-layout">
          {/* Left — Form */}
          <div className="booking-form-wrapper">
            <BookingForm
              preSelectedServiceId={serviceId}
              preSelectedServiceName={serviceName}
            />
          </div>

          {/* Right — Info */}
          <div className="booking-info">
            <div className="booking-info-card">
              <h3 className="info-card-title">📋 Booking Information</h3>
              <ul className="info-list">
                <li>
                  <span className="info-icon">⏰</span>
                  <div>
                    <strong>Opening Hours</strong>
                    <p>10:00 AM – 8:00 PM, All Days</p>
                  </div>
                </li>
                <li>
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Basant Vihar, Rehpura Road, Bareilly</p>
                  </div>
                </li>
                <li>
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p><a href="tel:09012277422">090122 77422</a></p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="booking-info-card booking-tips">
              <h3 className="info-card-title">💡 Booking Tips</h3>
              <ul className="tips-list">
                <li>Book at least 1 day in advance for best availability</li>
                <li>For bridal makeup, book 2-3 weeks early</li>
                <li>Walk-ins are welcome based on availability</li>
                <li>Arrive 10 minutes before your appointment</li>
                <li>Call us for group or party bookings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
