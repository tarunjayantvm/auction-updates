import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/BidderDashboard.css';

const BidderDashboard = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      name: 'Namma Cricket Premier League Auction',
      status: 'active',
      date: '2025-12-01',
    },
    {
      id: 2,
      name: 'Test Series Elite Auction',
      status: 'inactive',
      date: '2025-12-15',
    },
  ];

  return (
    <div className="bidder-layout">
      <header className="bidder-header fade-in">
        <div className="header-content">
          <h1>Bidder Dashboard</h1>
          <button className="btn-logout" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </header>

      <main className="bidder-main">
        <div className="purse-card scale-in">
          <div className="purse-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div className="purse-content">
            <h3>Your Team Purse</h3>
            <p className="purse-amount">₹ 50,00,000</p>
            <span className="purse-label">Available Balance</span>
          </div>
        </div>

        <div className="events-section">
          <h2>Live Auction Events</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className={`event-card ${event.status} fade-in`}>
                <div className="event-header">
                  <span className={`event-status ${event.status}`}>
                    {event.status === 'active' ? 'LIVE' : 'UPCOMING'}
                  </span>
                </div>
                <div className="event-body">
                  <h3>{event.name}</h3>
                  <p className="event-date">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="event-footer">
                  {event.status === 'active' ? (
                    <button
                      className="btn btn-join"
                      onClick={() => navigate('/bidder/auction-room')}
                    >
                      Join Auction
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  ) : (
                    <button className="btn btn-waiting" disabled>
                      Waiting to Start
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BidderDashboard;
