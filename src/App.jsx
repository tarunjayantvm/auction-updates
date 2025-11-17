import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/Dashboard';
import CreateEvent from './pages/admin/CreateEvent';
import ManagePlayers from './pages/admin/ManagePlayers';
import ManageBidders from './pages/admin/ManageBidders';
import Settings from './pages/admin/Settings';
import BidderDashboard from './pages/bidder/Dashboard';
import AuctionRoom from './pages/bidder/AuctionRoom';
import SpectatorDashboard from './pages/spectator/Dashboard';
import WatchLive from './pages/spectator/WatchLive';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-event" element={<CreateEvent />} />
        <Route path="/admin/manage-players" element={<ManagePlayers />} />
        <Route path="/admin/manage-bidders" element={<ManageBidders />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/bidder/dashboard" element={<BidderDashboard />} />
        <Route path="/bidder/auction-room" element={<AuctionRoom />} />
        <Route path="/spectator/dashboard" element={<SpectatorDashboard />} />
        <Route path="/spectator/watch-live" element={<WatchLive />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
