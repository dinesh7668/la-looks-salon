// -------------------------------------------------
// About Page
// Salon introduction, mission, and story
// -------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page" id="about-page">
      {/* Page Header */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-subtitle">
            Learn about our journey, passion for beauty, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story" id="about-story">
        <div className="container about-story-grid">
          <div className="about-story-content">
            <span className="section-label" style={{textAlign: 'left', display: 'block'}}>
              Our Story
            </span>
            <h2 className="about-heading">Welcome to LA Looks Salon</h2>
            <p className="about-hindi">ला लुक्स सैलून में आपका स्वागत है</p>
            <p className="about-text">
              Founded with a vision to bring premium beauty services to Bareilly, 
              <strong> LA Looks Salon</strong> has grown to become one of the most trusted 
              names in the local beauty industry. Located in the heart of Basant Vihar, 
              our salon has been serving the women of Bareilly with dedication and artistry.
            </p>
            <p className="about-text">
              From trendy hair cuts to stunning bridal makeovers, our team of skilled 
              beauty professionals is committed to helping you look and feel your best 
              for every occasion. We believe that every woman deserves to feel beautiful, 
              and we bring that belief to life through our services.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Years of Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100+</span>
                <span className="highlight-label">Happy Clients</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">13+</span>
                <span className="highlight-label">Services Offered</span>
              </div>
            </div>
          </div>
          <div className="about-story-image">
            <img
              src="/images/about-salon.png"
              alt="LA Looks Salon Interior"
              className="about-img"
            />
            <div className="about-img-badge">
              <span className="badge-icon">⭐</span>
              <div>
                <strong>5.0 Rating</strong>
                <span>100+ Reviews on Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="about-mission" id="about-mission">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Mission</span>
            <h2>What Drives Us</h2>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <span className="mission-icon">💎</span>
              <h3>Quality First</h3>
              <p>
                We use only premium, branded beauty products to ensure the best results 
                for our clients. No compromises on quality, ever.
              </p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">🤝</span>
              <h3>Customer Satisfaction</h3>
              <p>
                Your happiness is our success. We listen to your needs, offer expert 
                advice, and deliver results that exceed expectations.
              </p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">🌟</span>
              <h3>Continuous Learning</h3>
              <p>
                Our stylists stay updated with the latest trends, techniques, and 
                products in the beauty industry to serve you better.
              </p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">🌿</span>
              <h3>Hygiene & Safety</h3>
              <p>
                We maintain the highest standards of cleanliness and sanitation. 
                All our tools are sterilized and our spaces regularly sanitized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why" id="about-why">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why LA Looks</span>
            <h2>Why Choose Us?</h2>
          </div>
          <div className="why-list">
            <div className="why-item">
              <div className="why-number">01</div>
              <div>
                <h4>Expert & Trained Stylists</h4>
                <p>Our team consists of professionally trained beauty artists with years of hands-on experience.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">02</div>
              <div>
                <h4>Premium Products Only</h4>
                <p>We use top brands like L'Oréal, Lakmé, and MAC to ensure salon-quality results every time.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">03</div>
              <div>
                <h4>Affordable Luxury</h4>
                <p>Experience premium beauty services without breaking the bank. Quality at prices that make sense.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-number">04</div>
              <div>
                <h4>Warm & Welcoming Ambiance</h4>
                <p>Our salon is designed to be a relaxing retreat where you can unwind and enjoy your beauty session.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '16px', fontSize: '2rem' }}>
            Ready to Experience the Difference?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '1.05rem' }}>
            Visit LA Looks Salon today and discover why we're Bareilly's favorite beauty destination.
          </p>
          <Link to="/booking" className="btn btn-gold">
            ✨ Book Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
