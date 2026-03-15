// -------------------------------------------------
// Navbar Component
// Responsive navigation bar with mobile menu
// -------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add scroll effect — navbar becomes solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Book Now' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="main-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <span className="logo-icon">✦</span>
          <div className="logo-text">
            <span className="logo-name">LA Looks</span>
            <span className="logo-sub">S A L O N</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`} id="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                id={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
                <span className="nav-link-underline"></span>
              </Link>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <Link to="/booking" className="btn btn-primary" id="nav-book-btn-mobile">
              Book Appointment
            </Link>
          </li>
        </ul>

        {/* CTA Button — Desktop */}
        <Link to="/booking" className="btn btn-primary nav-cta-desktop" id="nav-book-btn">
          Book Now
        </Link>

        {/* Hamburger Menu — Mobile */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          id="hamburger-btn"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
