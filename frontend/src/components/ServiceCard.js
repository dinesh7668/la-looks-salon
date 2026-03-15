// -------------------------------------------------
// ServiceCard Component
// Displays a single salon service with image, price
// -------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ service }) {
  // Color themes for different service categories
  const categoryColors = {
    'Hair Services': { bg: '#fef3f2', accent: '#e74c6f', gradient: 'linear-gradient(135deg, #e74c6f, #f4a261)' },
    'Skin Services': { bg: '#f0fdf4', accent: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #06b6d4)' },
    'Makeup Services': { bg: '#fdf4ff', accent: '#a855f7', gradient: 'linear-gradient(135deg, #a855f7, #ec4899)' },
    'Nail Services': { bg: '#fff7ed', accent: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
  };

  const colors = categoryColors[service.category] || categoryColors['Hair Services'];

  return (
    <div className="service-card" id={`service-card-${service._id}`}>
      {/* Service Icon */}
      <div
        className="service-card-icon"
        style={{ background: colors.gradient }}
      >
        <span className="service-emoji">{service.image || '✨'}</span>
      </div>

      {/* Service Info */}
      <div className="service-card-body">
        <span className="service-category" style={{ color: colors.accent }}>
          {service.category}
        </span>
        <h3 className="service-name">{service.name}</h3>
        <p className="service-description">{service.description}</p>

        {/* Price & Duration */}
        <div className="service-meta">
          <span className="service-price">₹{service.price.toLocaleString()}</span>
          {service.duration && (
            <span className="service-duration">🕐 {service.duration}</span>
          )}
        </div>

        {/* Book Now Button */}
        <Link
          to={`/booking?service=${service._id}&name=${encodeURIComponent(service.name)}`}
          className="btn btn-primary service-book-btn"
          id={`book-btn-${service._id}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
