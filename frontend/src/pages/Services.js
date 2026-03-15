// -------------------------------------------------
// Services Page
// Displays all services grouped by category
// -------------------------------------------------

import React, { useState, useEffect } from 'react';
import { getServices } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(services.map((s) => s.category))];

  // Filter services by active category
  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  // Category icons
  const categoryIcons = {
    'All': '✨',
    'Hair Services': '✂️',
    'Skin Services': '🧴',
    'Makeup Services': '💄',
    'Nail Services': '💅',
  };

  return (
    <div className="services-page" id="services-page">
      {/* Page Header */}
      <section className="page-hero services-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-subtitle">
            Discover our complete range of premium beauty services, 
            tailored to make you look and feel your absolute best.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="services-filter" id="services-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                id={`filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                <span className="filter-icon">{categoryIcons[category] || '✨'}</span>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list" id="services-list">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading services...</p>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No services found</h3>
              <p>Please try a different category or check back later.</p>
            </div>
          ) : (
            <>
              <p className="services-count">
                Showing <strong>{filteredServices.length}</strong> service{filteredServices.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' && ` in ${activeCategory}`}
              </p>
              <div className="services-page-grid">
                {filteredServices.map((service, index) => (
                  <div
                    key={service._id}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Services;
