import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/AdminDashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    players: 0,
    bidders: 0,
    events: 0,
  });
  const [auctionStatus, setAuctionStatus] = useState('off');
  const [bidderLimit, setBidderLimit] = useState('');
  const [logs, setLogs] = useState(['System initialized...']);

  const addLog = (message) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const startAuction = () => {
    setAuctionStatus('on');
    addLog('Auction started by admin.');
  };

  const stopAuction = () => {
    setAuctionStatus('off');
    addLog('Auction stopped by admin.');
  };

  const saveLimit = () => {
    if (!bidderLimit || bidderLimit <= 0) {
      alert('Please enter a valid number.');
      return;
    }
    addLog(`Bidder limit set to: ${bidderLimit}`);
    alert('Bidder limit saved!');
  };

  return (
    <div className="admin-layout">
      <Sidebar role="admin" />
      <main className="admin-main">
        <div className="page-header fade-in">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your auction events and monitor live activity</p>
          </div>
        </div>

        <div className="stats-grid fade-in">
          <div className="stat-card blue">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Total Players</h3>
              <p className="stat-value">{stats.players}</p>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Total Bidders</h3>
              <p className="stat-value">{stats.bidders}</p>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>Active Events</h3>
              <p className="stat-value">{stats.events}</p>
            </div>
          </div>
        </div>

        <div className="section-grid">
          <div className="card scale-in">
            <h2>Live Auction Control</h2>
            <div className="control-box">
              <div className="status-display">
                <span>Status:</span>
                <span className={`status-badge ${auctionStatus}`}>
                  {auctionStatus === 'on' ? 'LIVE' : 'OFFLINE'}
                </span>
              </div>
              <div className="button-group">
                <button className="btn btn-success" onClick={startAuction}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Start Auction
                </button>
                <button className="btn btn-danger" onClick={stopAuction}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="6" width="12" height="12"/>
                  </svg>
                  Stop Auction
                </button>
              </div>
            </div>
          </div>

          <div className="card scale-in">
            <h2>Bidder Entry Limit</h2>
            <div className="form-group">
              <label>Maximum Bidders Allowed</label>
              <input
                type="number"
                placeholder="Enter limit"
                value={bidderLimit}
                onChange={(e) => setBidderLimit(e.target.value)}
              />
              <button className="btn btn-primary" onClick={saveLimit}>
                Save Limit
              </button>
            </div>
          </div>
        </div>

        <div className="card fade-in">
          <h2>Live System Logs</h2>
          <div className="log-box">
            {logs.map((log, index) => (
              <div key={index} className="log-entry">
                {log}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
