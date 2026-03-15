// -------------------------------------------------
// Footer Component
// Displays salon info, quick links, and contact
// -------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      {/* Decorative Top Border */}
      <div className="footer-top-border"></div>

      <div className="footer-content container">
        {/* Column 1 — Brand & About */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">✦</span>
            <div>
              <h3 className="footer-logo-name">LA Looks Salon</h3>
              <p className="footer-logo-hindi">ला लुक्स सैलून</p>
            </div>
          </div>
          <p className="footer-description">
            Premium beauty parlour in Bareilly offering professional hair styling,
            skin care, bridal makeup, and more. Your beauty, our passion.
          </p>
          <div className="footer-rating">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span className="rating-text">5.0 — 100+ Happy Customers</span>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" id="footer-link-home">Home</Link></li>
            <li><Link to="/services" id="footer-link-services">Our Services</Link></li>
            <li><Link to="/booking" id="footer-link-booking">Book Appointment</Link></li>
            <li><Link to="/about" id="footer-link-about">About Us</Link></li>
            <li><Link to="/contact" id="footer-link-contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div className="footer-column">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Hair Styling</Link></li>
            <li><Link to="/services">Bridal Makeup</Link></li>
            <li><Link to="/services">Facial & Skin Care</Link></li>
            <li><Link to="/services">Hair Coloring</Link></li>
            <li><Link to="/services">Manicure & Pedicure</Link></li>
          </ul>
        </div>

        {/* Column 4 — Contact Info */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon">📍</span>
              <span>Basant Vihar, Rehpura Road,<br />Opp. Junior High School,<br />Bareilly, UP 243122</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <a href="tel:09012277422" className="contact-link">090122 77422</a>
            </li>
            <li>
              <span className="contact-icon">🕐</span>
              <span>10:00 AM – 8:00 PM<br />Open All Days</span>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <a
                href="https://maps.app.goo.gl/ejnkmVrcWkLTQAu28"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Get Directions →
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© 2024 LA Looks Salon. All rights reserved.</p>
          <p className="footer-tagline">Crafted with 💖 in Bareilly</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
