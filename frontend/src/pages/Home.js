// -------------------------------------------------
// Home Page
// Hero section, featured services, testimonials, CTA
// -------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

function Home() {
  const [featuredServices, setFeaturedServices] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await getServices();
        // Show first 4 services as featured
        setFeaturedServices(data.slice(0, 4));
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="home-page" id="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero-section">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          <span className="particle">✦</span>
          <span className="particle">✧</span>
          <span className="particle">✦</span>
          <span className="particle">✧</span>
          <span className="particle">✦</span>
        </div>
        <div className="hero-content container">
          <div className="hero-badge animate-fadeInUp">
            ⭐ Rated 5.0 — 100+ Happy Customers
          </div>
          <h1 className="hero-title animate-fadeInUp">
            Where Beauty
            <span className="hero-title-accent"> Meets Elegance</span>
          </h1>
          <p className="hero-subtitle animate-fadeInUp">
            Welcome to <strong>LA Looks Salon</strong> — Bareilly's premium beauty destination.
            Expert hair styling, radiant skin care, and flawless bridal makeup services.
          </p>
          <div className="hero-buttons animate-fadeInUp">
            <Link to="/booking" className="btn btn-primary hero-btn" id="hero-book-btn">
              ✨ Book Appointment
            </Link>
            <Link to="/services" className="btn btn-secondary hero-btn hero-btn-outline" id="hero-services-btn">
              Explore Services →
            </Link>
          </div>
          <div className="hero-info animate-fadeInUp">
            <div className="hero-info-item">
              <span className="hero-info-icon">📍</span>
              <span>Basant Vihar, Bareilly</span>
            </div>
            <div className="hero-info-divider"></div>
            <div className="hero-info-item">
              <span className="hero-info-icon">🕐</span>
              <span>10 AM – 8 PM</span>
            </div>
            <div className="hero-info-divider"></div>
            <div className="hero-info-item">
              <span className="hero-info-icon">📞</span>
              <a href="tel:09012277422" className="hero-phone">090122 77422</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="features-strip" id="features-strip">
        <div className="container features-grid">
          <div className="feature-item">
            <span className="feature-icon">💎</span>
            <div>
              <h4>Premium Products</h4>
              <p>Only top-quality, branded beauty products used</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">👩‍🎨</span>
            <div>
              <h4>Expert Stylists</h4>
              <p>Trained & experienced beauty professionals</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <div>
              <h4>Hygienic Environment</h4>
              <p>Clean, sanitized, and welcoming salon space</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <div>
              <h4>Affordable Pricing</h4>
              <p>Premium services at budget-friendly rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="featured-services" id="featured-services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Our Popular Services</h2>
            <p>Discover our most loved beauty treatments, crafted to make you look and feel your best.</p>
          </div>

          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <div
                key={service._id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn btn-secondary" id="view-all-services-btn">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section" id="stats-section">
        <div className="stats-overlay"></div>
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">13+</span>
            <span className="stat-label">Beauty Services</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5.0</span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Reviews</span>
            <h2>What Our Clients Say</h2>
            <p>Real reviews from our happy customers who trust LA Looks Salon.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Amazing salon! Got my bridal makeup done here and it was absolutely flawless. 
                The staff is so professional and friendly. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">P</div>
                <div>
                  <strong>Priya Sharma</strong>
                  <span>Bridal Makeup</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Best salon in Bareilly! I've been coming here for hair styling and facials 
                for over a year. The results are always amazing and prices are fair."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">A</div>
                <div>
                  <strong>Anjali Verma</strong>
                  <span>Regular Customer</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Loved the hair coloring service! They used premium products and 
                my hair looks stunning. The ambiance of the salon is very premium too."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">S</div>
                <div>
                  <strong>Sneha Gupta</strong>
                  <span>Hair Coloring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" id="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Transform Your Look?</h2>
          <p className="cta-text">
            Book your appointment today and experience the best beauty services in Bareilly.
          </p>
          <div className="cta-buttons">
            <Link to="/booking" className="btn btn-gold" id="cta-book-btn">
              ✨ Book Your Appointment
            </Link>
            <a href="tel:09012277422" className="btn btn-secondary cta-call-btn" id="cta-call-btn">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
