// -------------------------------------------------
// Contact Page
// Displays salon contact info, map, and hours
// -------------------------------------------------

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page" id="contact-page">
      {/* Page Header */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">
            We'd love to hear from you! Visit our salon or reach out through phone.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content" id="contact-content">
        <div className="container contact-grid">
          {/* Contact Cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">📍</div>
              <h3>Our Address</h3>
              <p>
                Basant Vihar, Rehpura Road,
                <br />
                Opp. Junior High School,
                <br />
                Bareilly, Uttar Pradesh 243122
              </p>
              <a
                href="https://maps.app.goo.gl/ejnkmVrcWkLTQAu28"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
              >
                Get Directions on Google Maps →
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">📞</div>
              <h3>Phone Number</h3>
              <p className="contact-phone">
                <a href="tel:09012277422">090122 77422</a>
              </p>
              <p className="contact-note">
                Call us to book an appointment or for any enquiries.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">🕐</div>
              <h3>Opening Hours</h3>
              <div className="hours-table">
                <div className="hours-row">
                  <span>Monday – Sunday</span>
                  <span className="hours-time">10:00 AM – 8:00 PM</span>
                </div>
              </div>
              <p className="contact-note" style={{ marginTop: '12px' }}>
                Open all days of the week!
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">🏪</div>
              <h3>Business Info</h3>
              <div className="business-info">
                <p><strong>Business:</strong> LA Looks Salon (ला लुक्स सैलून)</p>
                <p><strong>Category:</strong> Beauty Parlour</p>
                <p><strong>Rating:</strong> ⭐ 5.0 (100+ Reviews)</p>
                <p><strong>City:</strong> Bareilly, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="contact-map-wrapper" id="contact-map">
            <h3 className="map-title">📍 Find Us on the Map</h3>
            <div className="map-container">
              <iframe
                title="LA Looks Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2!2d79.4!3d28.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIxJzM2LjAiTiA3OcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/ejnkmVrcWkLTQAu28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary map-btn"
              id="open-maps-btn"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
