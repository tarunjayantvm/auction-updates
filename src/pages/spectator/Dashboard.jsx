import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SpectatorDashboard.css';

const SpectatorDashboard = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      name: 'Namma Cricket Premier League Auction',
      status: 'active',
      viewers: 1245,
    },
    {
      id: 2,
      name: 'Legends Cricket Auction',
      status: 'inactive',
      viewers: 0,
    },
  ];

  return (
    <div className="spectator-layout">
      <header className="spectator-header fade-in">
        <div className="header-content">
          <h1>Spectator Dashboard</h1>
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

      <main className="spectator-main">
        <div className="intro-section scale-in">
          <div className="intro-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
          </div>
          <h2>Watch Live Auctions</h2>
          <p>Join thousands of cricket fans watching auctions unfold in real-time</p>
        </div>

        <div className="events-section">
          <h2>Available Auctions</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className={`event-card ${event.status} fade-in`}>
                <div className="event-badge">
                  <span className={`live-indicator ${event.status}`}>
                    {event.status === 'active' && <span className="pulse"></span>}
                    {event.status === 'active' ? 'LIVE NOW' : 'UPCOMING'}
                  </span>
                </div>

                <div className="event-content">
                  <h3>{event.name}</h3>

                  {event.status === 'active' && (
                    <div className="viewers-count">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span>{event.viewers.toLocaleString()} watching</span>
                    </div>
                  )}

                  {event.status === 'active' ? (
                    <button
                      className="btn btn-watch"
                      onClick={() => navigate('/spectator/watch-live')}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                      Watch Live
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

export default SpectatorDashboard;
