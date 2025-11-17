import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/WatchLive.css';

const WatchLive = () => {
  const navigate = useNavigate();
  const [currentBid, setCurrentBid] = useState(12000000);

  const player = {
    name: 'Rohit Sharma',
    role: 'Batsman',
    country: 'India',
    basePrice: 10000000,
  };

  return (
    <div className="watch-layout">
      <header className="watch-header fade-in">
        <div className="header-content">
          <div className="header-left">
            <span className="live-badge">
              <span className="pulse-dot"></span>
              LIVE
            </span>
            <h1>Namma Cricket Premier League Auction</h1>
          </div>
          <button className="btn-back" onClick={() => navigate('/spectator/dashboard')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>
        </div>
      </header>

      <main className="watch-main">
        <div className="watch-container">
          <div className="main-stage scale-in">
            <div className="stage-header">
              <h2>Current Player on Auction</h2>
              <div className="viewers-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                1,245 watching
              </div>
            </div>

            <div className="player-display">
              <div className="player-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>

              <div className="player-details">
                <h3>{player.name}</h3>
                <div className="player-tags">
                  <span className="tag">{player.role}</span>
                  <span className="tag">{player.country}</span>
                </div>
              </div>
            </div>

            <div className="bid-display">
              <div className="bid-info">
                <span className="bid-label">Base Price</span>
                <span className="bid-value">₹ {(player.basePrice / 10000000).toFixed(1)} Cr</span>
              </div>
              <div className="bid-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
              <div className="bid-info current">
                <span className="bid-label">Current Bid</span>
                <span className="bid-value highlight">₹ {(currentBid / 10000000).toFixed(1)} Cr</span>
              </div>
            </div>

            <div className="countdown-bar">
              <div className="countdown-fill"></div>
              <span className="countdown-text">10s remaining</span>
            </div>
          </div>

          <div className="activity-sidebar scale-in">
            <h3>Live Bidding Activity</h3>
            <div className="activity-stream">
              <div className="activity-entry">
                <div className="activity-time">Just now</div>
                <div className="activity-detail">
                  <strong>Chennai Super Kings</strong> bid ₹12 Cr
                </div>
              </div>
              <div className="activity-entry">
                <div className="activity-time">5s ago</div>
                <div className="activity-detail">
                  <strong>Mumbai Indians</strong> bid ₹11.5 Cr
                </div>
              </div>
              <div className="activity-entry">
                <div className="activity-time">12s ago</div>
                <div className="activity-detail">
                  <strong>Royal Challengers</strong> bid ₹11 Cr
                </div>
              </div>
              <div className="activity-entry">
                <div className="activity-time">20s ago</div>
                <div className="activity-detail">
                  <strong>Delhi Capitals</strong> bid ₹10.5 Cr
                </div>
              </div>
            </div>

            <div className="chat-section">
              <h4>Live Chat</h4>
              <div className="chat-messages">
                <div className="chat-message">
                  <strong>CricketFan123:</strong> Great player!
                </div>
                <div className="chat-message">
                  <strong>AuctionWatch:</strong> CSK making a move
                </div>
                <div className="chat-message">
                  <strong>IPLLover:</strong> Worth every penny
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchLive;
