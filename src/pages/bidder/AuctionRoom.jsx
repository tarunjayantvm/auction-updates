import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuctionRoom.css';

const AuctionRoom = () => {
  const navigate = useNavigate();
  const [currentBid, setCurrentBid] = useState(12000000);
  const [timer, setTimer] = useState(10);

  const player = {
    name: 'Rohit Sharma',
    role: 'Batsman',
    country: 'India',
    basePrice: 10000000,
    runs: 5879,
    average: 45.3,
    strikeRate: 139.2,
  };

  const placeBid = (increment) => {
    setCurrentBid(currentBid + increment);
    setTimer(10);
  };

  return (
    <div className="auction-layout">
      <header className="auction-header fade-in">
        <div className="header-content">
          <h1>Live Auction Room</h1>
          <button className="btn-back" onClick={() => navigate('/bidder/dashboard')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Dashboard
          </button>
        </div>
      </header>

      <main className="auction-main">
        <div className="auction-container">
          <div className="player-section scale-in">
            <div className="player-card-large">
              <div className="player-image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>

              <div className="player-info">
                <h2>{player.name}</h2>
                <div className="player-meta">
                  <span className="badge">{player.role}</span>
                  <span className="badge">{player.country}</span>
                </div>

                <div className="player-stats">
                  <div className="stat-item">
                    <span className="stat-label">Runs</span>
                    <span className="stat-value">{player.runs}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Average</span>
                    <span className="stat-value">{player.average}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Strike Rate</span>
                    <span className="stat-value">{player.strikeRate}</span>
                  </div>
                </div>

                <div className="price-section">
                  <div className="base-price">
                    <span>Base Price</span>
                    <strong>₹ {(player.basePrice / 10000000).toFixed(1)} Cr</strong>
                  </div>
                  <div className="current-bid">
                    <span>Current Bid</span>
                    <strong>₹ {(currentBid / 10000000).toFixed(1)} Cr</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="timer-card">
              <div className="timer-display">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{timer}s</span>
              </div>
              <p>Time remaining</p>
            </div>
          </div>

          <div className="bid-panel scale-in">
            <h3>Place Your Bid</h3>

            <div className="bid-buttons">
              <button className="bid-btn" onClick={() => placeBid(500000)}>
                <span className="bid-label">+ ₹5 Lakhs</span>
                <span className="bid-amount">
                  ₹ {((currentBid + 500000) / 10000000).toFixed(2)} Cr
                </span>
              </button>

              <button className="bid-btn" onClick={() => placeBid(1000000)}>
                <span className="bid-label">+ ₹10 Lakhs</span>
                <span className="bid-amount">
                  ₹ {((currentBid + 1000000) / 10000000).toFixed(2)} Cr
                </span>
              </button>

              <button className="bid-btn" onClick={() => placeBid(2000000)}>
                <span className="bid-label">+ ₹20 Lakhs</span>
                <span className="bid-amount">
                  ₹ {((currentBid + 2000000) / 10000000).toFixed(2)} Cr
                </span>
              </button>

              <button className="bid-btn" onClick={() => placeBid(5000000)}>
                <span className="bid-label">+ ₹50 Lakhs</span>
                <span className="bid-amount">
                  ₹ {((currentBid + 5000000) / 10000000).toFixed(2)} Cr
                </span>
              </button>
            </div>

            <div className="activity-feed">
              <h4>Recent Activity</h4>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-team">Chennai Super Kings</span>
                  <span className="activity-bid">₹ 12 Cr</span>
                </div>
                <div className="activity-item">
                  <span className="activity-team">Mumbai Indians</span>
                  <span className="activity-bid">₹ 11.5 Cr</span>
                </div>
                <div className="activity-item">
                  <span className="activity-team">Royal Challengers</span>
                  <span className="activity-bid">₹ 11 Cr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuctionRoom;
