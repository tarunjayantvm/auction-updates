import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/ManagePlayers.css';

const ManagePlayers = () => {
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    role: 'Batsman',
    battingStyle: '',
    bowlingStyle: '',
    runs: '',
    avg: '',
    sr: '',
    wickets: '',
    er: '',
    basePrice: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addPlayer = () => {
    if (!formData.name) {
      alert('Enter player details!');
      return;
    }

    setPlayers([...players, { ...formData, id: Date.now() }]);
    setFormData({
      name: '',
      country: '',
      role: 'Batsman',
      battingStyle: '',
      bowlingStyle: '',
      runs: '',
      avg: '',
      sr: '',
      wickets: '',
      er: '',
      basePrice: '',
    });
    alert('Player added successfully!');
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-layout">
      <Sidebar role="admin" />
      <main className="admin-main">
        <div className="page-header fade-in">
          <h1>Manage Players</h1>
          <p>Add and manage cricket players for auction</p>
        </div>

        <div className="card scale-in">
          <h2>Add New Player</h2>
          <div className="form-grid-players">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Player name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option>Batsman</option>
                <option>Bowler</option>
                <option>All-rounder</option>
                <option>Wicket Keeper</option>
              </select>
            </div>

            <div className="form-group">
              <label>Batting Style</label>
              <input
                type="text"
                name="battingStyle"
                placeholder="e.g., Right-hand bat"
                value={formData.battingStyle}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Bowling Style</label>
              <input
                type="text"
                name="bowlingStyle"
                placeholder="e.g., Right-arm fast"
                value={formData.bowlingStyle}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Runs</label>
              <input
                type="number"
                name="runs"
                placeholder="Total runs"
                value={formData.runs}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Average</label>
              <input
                type="number"
                name="avg"
                placeholder="Batting average"
                value={formData.avg}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Strike Rate</label>
              <input
                type="number"
                name="sr"
                placeholder="Strike rate"
                value={formData.sr}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Wickets</label>
              <input
                type="number"
                name="wickets"
                placeholder="Total wickets"
                value={formData.wickets}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Economy Rate</label>
              <input
                type="number"
                name="er"
                placeholder="Economy rate"
                value={formData.er}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Base Price (₹ Lakhs)</label>
              <input
                type="number"
                name="basePrice"
                placeholder="Base price"
                value={formData.basePrice}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Upload Player Image</label>
              <input type="file" accept="image/*" />
            </div>
          </div>

          <button className="btn btn-primary" onClick={addPlayer}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add Player
          </button>
        </div>

        <div className="card fade-in">
          <h2>Player List</h2>
          {players.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <p>No players added yet.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table className="players-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                    <th>Base Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player.id}>
                      <td>
                        <div className="player-cell">
                          <strong>{player.name}</strong>
                          <span>{player.country}</span>
                        </div>
                      </td>
                      <td>{player.role}</td>
                      <td>{player.runs || '-'}</td>
                      <td>{player.wickets || '-'}</td>
                      <td>₹{player.basePrice} L</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-icon btn-edit" title="Edit">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                          </button>
                          <button
                            className="btn-icon btn-delete"
                            onClick={() => deletePlayer(player.id)}
                            title="Delete"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ManagePlayers;
