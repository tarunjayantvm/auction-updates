import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/CreateEvent.css';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: 'Mega Auction',
    status: 'active',
  });
  const [events, setEvents] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveEvent = () => {
    if (!formData.name || !formData.date) {
      alert('Please fill all details.');
      return;
    }

    setEvents([...events, { ...formData, id: Date.now() }]);
    setFormData({ name: '', date: '', type: 'Mega Auction', status: 'active' });
    alert('Event Created Successfully!');
  };

  const resetForm = () => {
    setFormData({ name: '', date: '', type: 'Mega Auction', status: 'active' });
  };

  return (
    <div className="admin-layout">
      <Sidebar role="admin" />
      <main className="admin-main">
        <div className="page-header fade-in">
          <h1>Create Auction Event</h1>
          <p>Set up a new cricket auction event</p>
        </div>

        <div className="card scale-in">
          <h2>Event Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter auction event name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Auction Type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="Mega Auction">Mega Auction</option>
                <option value="Mini Auction">Mini Auction</option>
                <option value="Special Auction">Special Auction</option>
              </select>
            </div>

            <div className="form-group">
              <label>Event Visibility</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload Player List (CSV / Excel)</label>
              <input type="file" accept=".csv,.xls,.xlsx" />
            </div>
          </div>

          <div className="button-group">
            <button className="btn btn-primary" onClick={saveEvent}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                <polyline points="17 21 17 13 7 13 7 21"/>
                <polyline points="7 3 7 8 15 8"/>
              </svg>
              Save Event
            </button>
            <button className="btn btn-secondary" onClick={resetForm}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
              Reset
            </button>
          </div>
        </div>

        <div className="card fade-in">
          <h2>Created Events</h2>
          {events.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <p>No events created yet.</p>
            </div>
          ) : (
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-info">
                    <h3>{event.name}</h3>
                    <p>{event.date} • {event.type}</p>
                  </div>
                  <span className={`status-badge ${event.status}`}>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateEvent;
