import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import '../../styles/ManageBidders.css';

const ManageBidders = () => {
  const [bidders, setBidders] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    purse: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addBidder = () => {
    if (!formData.name || !formData.purse) {
      alert('Please fill all bidder details.');
      return;
    }

    setBidders([
      ...bidders,
      {
        ...formData,
        id: Date.now(),
        status: 'Active',
        frozen: false,
      },
    ]);
    setFormData({ name: '', purse: '' });
    alert('Bidder added successfully!');
  };

  const toggleFreeze = (id) => {
    setBidders(
      bidders.map((b) =>
        b.id === id
          ? { ...b, frozen: !b.frozen, status: b.frozen ? 'Active' : 'Frozen' }
          : b
      )
    );
  };

  const kickBidder = (id) => {
    if (confirm('Remove this bidder from auction?')) {
      setBidders(bidders.filter((b) => b.id !== id));
    }
  };

  const resetPassword = (name) => {
    alert(`Password reset for: ${name} to default — bidder#135`);
  };

  return (
    <div className="admin-layout">
      <Sidebar role="admin" />
      <main className="admin-main">
        <div className="page-header fade-in">
          <h1>Manage Bidders</h1>
          <p>Add and control bidders participating in auctions</p>
        </div>

        <div className="card scale-in">
          <h2>Add New Bidder</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Bidder Name / Team Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter bidder/team name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Team Purse (₹ in Crores)</label>
              <input
                type="number"
                name="purse"
                placeholder="e.g., 20"
                value={formData.purse}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={addBidder}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add Bidder
          </button>
        </div>

        <div className="card fade-in">
          <h2>Registered Bidders</h2>
          {bidders.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <p>No bidders registered yet.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table className="bidders-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Purse</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bidders.map((bidder) => (
                    <tr key={bidder.id}>
                      <td>
                        <strong>{bidder.name}</strong>
                      </td>
                      <td>₹{bidder.purse} Cr</td>
                      <td>
                        <span className={`status-badge ${bidder.frozen ? 'frozen' : 'active'}`}>
                          {bidder.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="btn-sm btn-warning"
                            onClick={() => toggleFreeze(bidder.id)}
                          >
                            {bidder.frozen ? 'Unfreeze' : 'Freeze'}
                          </button>
                          <button
                            className="btn-sm btn-info"
                            onClick={() => resetPassword(bidder.name)}
                          >
                            Reset Password
                          </button>
                          <button
                            className="btn-sm btn-danger"
                            onClick={() => kickBidder(bidder.id)}
                          >
                            Kick
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

export default ManageBidders;
