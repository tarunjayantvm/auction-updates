import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    adminUser: '',
    adminPass: '',
    bidderDefault: 'bidder#135',
    specDefault: 'spec#135',
    maxBidders: '',
    bidIncrement: '5',
    countdown: '10',
    specAccess: 'enabled',
    maintMode: 'off',
    announcement: '',
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const updateAdmin = () => {
    alert('Admin credentials updated!');
  };

  const saveDefaults = () => {
    alert('Default passwords saved!');
  };

  const setLimit = () => {
    if (!settings.maxBidders || settings.maxBidders <= 0) {
      alert('Please enter a valid number.');
      return;
    }
    alert(`Bidder limit set to: ${settings.maxBidders}`);
  };

  const saveBidding = () => {
    alert(
      `Bidding settings saved!\nIncrement: ₹${settings.bidIncrement}L\nTimer: ${settings.countdown}s`
    );
  };

  const updateSpectator = () => {
    alert(`Spectator view: ${settings.specAccess}`);
  };

  const updateMode = () => {
    alert(`System mode updated: ${settings.maintMode.toUpperCase()}`);
  };

  const announce = () => {
    if (!settings.announcement.trim()) {
      alert('Type a message first!');
      return;
    }
    alert(`Announcement sent:\n${settings.announcement}`);
    setSettings({ ...settings, announcement: '' });
  };

  return (
    <div className="admin-layout">
      <Sidebar role="admin" />
      <main className="admin-main">
        <div className="page-header fade-in">
          <h1>Admin Settings</h1>
          <p>Configure system preferences and controls</p>
        </div>

        <div className="settings-grid">
          <div className="card scale-in">
            <h2>Admin Credentials</h2>
            <div className="form-group">
              <label>New Username</label>
              <input
                type="text"
                name="adminUser"
                placeholder="Enter new admin username"
                value={settings.adminUser}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="adminPass"
                placeholder="Enter new admin password"
                value={settings.adminPass}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={updateAdmin}>
              Update Credentials
            </button>
          </div>

          <div className="card scale-in">
            <h2>Default Login Formats</h2>
            <div className="form-group">
              <label>Default Bidder Password</label>
              <input
                type="text"
                name="bidderDefault"
                value={settings.bidderDefault}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Default Spectator Password</label>
              <input
                type="text"
                name="specDefault"
                value={settings.specDefault}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={saveDefaults}>
              Save Defaults
            </button>
          </div>

          <div className="card scale-in">
            <h2>Bidder Entry Limit</h2>
            <div className="form-group">
              <label>Maximum Allowed Bidders</label>
              <input
                type="number"
                name="maxBidders"
                placeholder="e.g., 8"
                value={settings.maxBidders}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={setLimit}>
              Update Limit
            </button>
          </div>

          <div className="card scale-in">
            <h2>Bidding Settings</h2>
            <div className="form-group">
              <label>Bid Increment (₹ Lakhs)</label>
              <select name="bidIncrement" value={settings.bidIncrement} onChange={handleChange}>
                <option value="5">₹5 Lakhs</option>
                <option value="10">₹10 Lakhs</option>
                <option value="20">₹20 Lakhs</option>
                <option value="50">₹50 Lakhs</option>
              </select>
            </div>
            <div className="form-group">
              <label>Countdown Timer (seconds)</label>
              <select name="countdown" value={settings.countdown} onChange={handleChange}>
                <option value="5">5 seconds</option>
                <option value="10">10 seconds</option>
                <option value="15">15 seconds</option>
                <option value="20">20 seconds</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={saveBidding}>
              Save Settings
            </button>
          </div>

          <div className="card scale-in">
            <h2>Spectator Settings</h2>
            <div className="form-group">
              <label>Spectator Access</label>
              <select name="specAccess" value={settings.specAccess} onChange={handleChange}>
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={updateSpectator}>
              Update Access
            </button>
          </div>

          <div className="card scale-in">
            <h2>Maintenance Mode</h2>
            <div className="form-group">
              <label>System Mode</label>
              <select name="maintMode" value={settings.maintMode} onChange={handleChange}>
                <option value="off">Live Mode (Normal)</option>
                <option value="on">Maintenance Mode</option>
              </select>
            </div>
            <button className="btn btn-danger" onClick={updateMode}>
              Apply Mode
            </button>
          </div>
        </div>

        <div className="card fade-in">
          <h2>Broadcast Announcement</h2>
          <div className="form-group">
            <label>Message to Broadcast</label>
            <textarea
              name="announcement"
              rows="4"
              placeholder="Type message to broadcast to all bidders and spectators..."
              value={settings.announcement}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" onClick={announce}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/>
            </svg>
            Send Message
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
