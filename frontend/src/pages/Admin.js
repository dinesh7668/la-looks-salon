// -------------------------------------------------
// Admin Page
// View bookings and manage services
// -------------------------------------------------

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getBookings,
  getServices,
  updateBookingStatus,
  deleteBooking,
  deleteService,
  createService,
} from '../services/api';
import './Admin.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    duration: '',
    image: '',
  });
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  // Fetch data on mount and tab change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeTab === 'bookings') {
          const data = await getBookings();
          setBookings(data);
        } else {
          const data = await getServices();
          setServices(data);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  // Handle booking status update
  const handleStatusChange = async (id, status) => {
    try {
      await updateBookingStatus(id, status);
      setBookings(
        bookings.map((b) => (b._id === id ? { ...b, status } : b))
      );
    } catch (err) {
      alert('Error updating status');
    }
  };

  // Handle booking deletion
  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await deleteBooking(id);
        setBookings(bookings.filter((b) => b._id !== id));
      } catch (err) {
        alert('Error deleting booking');
      }
    }
  };

  // Handle service deletion
  const handleDeleteService = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteService(id);
        setServices(services.filter((s) => s._id !== id));
      } catch (err) {
        alert('Error deleting service');
      }
    }
  };

  // Handle Add Service Submit
  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const added = await createService({
        ...newService,
        price: Number(newService.price),
      });
      setServices([...services, added]);
      setNewService({
        name: '',
        category: '',
        description: '',
        price: '',
        duration: '',
        image: '',
      });
      setShowAddForm(false);
      alert('Service added successfully');
    } catch (err) {
      alert('Error adding service');
    }
  };

  // Unique categories for the datalist
  const uniqueCategories = [...new Set(services.map(s => s.category))];

  // Format date for display
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  // Status badge color
  const statusColor = {
    Pending: '#f59e0b',
    Confirmed: '#22c55e',
    Completed: '#3b82f6',
    Cancelled: '#ef4444',
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="admin-page" id="admin-page">
      {/* Page Header */}
      <section className="page-hero admin-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <h1 className="page-hero-title">Admin Dashboard</h1>
          <p className="page-hero-subtitle">
            Manage your salon's bookings and services from one place.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: '20px', backgroundColor: 'transparent', color: 'white', borderColor: 'white' }} onClick={handleLogout}>
            Logout Dashboard
          </button>
        </div>
      </section>

      {/* Admin Content */}
      <section className="admin-content" id="admin-content">
        <div className="container">
          {/* Tab Navigation */}
          <div className="admin-tabs" id="admin-tabs">
            <button
              className={`admin-tab ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
              id="tab-bookings"
            >
              📋 Bookings ({bookings.length})
            </button>
            <button
              className={`admin-tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
              id="tab-services"
            >
              💆 Services ({services.length})
            </button>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading data...</p>
            </div>
          ) : (
            <>
              {/* ===== BOOKINGS TAB ===== */}
              {activeTab === 'bookings' && (
                <div className="admin-section" id="bookings-section">
                  {bookings.length === 0 ? (
                    <div className="empty-state">
                      <span className="empty-icon">📋</span>
                      <h3>No Bookings Yet</h3>
                      <p>Bookings will appear here when customers make appointments.</p>
                    </div>
                  ) : (
                    <div className="admin-table-wrapper">
                      <table className="admin-table" id="bookings-table">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookings.map((booking) => (
                            <tr key={booking._id}>
                              <td className="td-name">{booking.customerName}</td>
                              <td>{booking.phone}</td>
                              <td>{booking.serviceName}</td>
                              <td>{formatDate(booking.appointmentDate)}</td>
                              <td>
                                <span
                                  className="status-badge"
                                  style={{
                                    background: `${statusColor[booking.status]}20`,
                                    color: statusColor[booking.status],
                                    borderColor: statusColor[booking.status],
                                  }}
                                >
                                  {booking.status}
                                </span>
                              </td>
                              <td className="td-actions">
                                <select
                                  className="status-select"
                                  value={booking.status}
                                  onChange={(e) =>
                                    handleStatusChange(booking._id, e.target.value)
                                  }
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Confirmed">Confirmed</option>
                                  <option value="Completed">Completed</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                                <button
                                  className="delete-btn"
                                  onClick={() => handleDeleteBooking(booking._id)}
                                  title="Delete booking"
                                >
                                  🗑️
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* ===== SERVICES TAB ===== */}
              {activeTab === 'services' && (
                <div className="admin-section" id="services-section">
                  <div className="header-actions">
                    <h2>Manage Services</h2>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => setShowAddForm(!showAddForm)}
                    >
                      {showAddForm ? 'Cancel' : '+ Add New Service'}
                    </button>
                  </div>

                  {showAddForm && (
                    <div className="add-service-form">
                      <h3>Add New Service</h3>
                      <form onSubmit={handleAddService} className="form-grid">
                        <div className="form-group">
                          <label>Service Name</label>
                          <input 
                            type="text" 
                            required 
                            className="form-control" 
                            value={newService.name}
                            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                            placeholder="e.g., Luxury Facial"
                          />
                        </div>
                        <div className="form-group">
                          <label>Category (Choose existing or type new)</label>
                          <input 
                            list="category-options" 
                            required 
                            className="form-control" 
                            value={newService.category}
                            onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                            placeholder="e.g., Skincare"
                          />
                          <datalist id="category-options">
                            {uniqueCategories.map((cat, idx) => (
                              <option key={idx} value={cat} />
                            ))}
                          </datalist>
                        </div>
                        <div className="form-group full-width">
                          <label>Description</label>
                          <textarea 
                            required 
                            rows="3" 
                            className="form-control" 
                            value={newService.description}
                            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                            placeholder="Briefly describe the service..."
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label>Price (₹)</label>
                          <input 
                            type="number" 
                            required 
                            className="form-control" 
                            value={newService.price}
                            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                            placeholder="e.g., 1500"
                          />
                        </div>
                        <div className="form-group">
                          <label>Duration (e.g., 30 mins)</label>
                          <input 
                            type="text" 
                            required 
                            className="form-control" 
                            value={newService.duration}
                            onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                            placeholder="e.g., 45 mins"
                          />
                        </div>
                        <div className="form-group full-width">
                          <label>Icon (Emoji or URL)</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={newService.image}
                            onChange={(e) => setNewService({ ...newService, image: e.target.value })}
                            placeholder="e.g., ✨, ✂️, 💅"
                          />
                        </div>
                        <div className="form-group full-width">
                          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                            Save Service
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {services.length === 0 ? (
                    <div className="empty-state">
                      <span className="empty-icon">💆</span>
                      <h3>No Services Found</h3>
                      <p>Add a service using the button above.</p>
                    </div>
                  ) : (
                    <div className="admin-table-wrapper">
                      <table className="admin-table" id="services-table">
                        <thead>
                          <tr>
                            <th>Icon</th>
                            <th>Service Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Duration</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map((service) => (
                            <tr key={service._id}>
                              <td className="td-icon">{service.image || '✨'}</td>
                              <td className="td-name">{service.name}</td>
                              <td>{service.category}</td>
                              <td className="td-price">₹{service.price.toLocaleString()}</td>
                              <td>{service.duration}</td>
                              <td className="td-actions">
                                <button
                                  className="delete-btn"
                                  onClick={() => handleDeleteService(service._id)}
                                  title="Delete service"
                                >
                                  🗑️
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Admin;
