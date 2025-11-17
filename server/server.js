require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

// DB connection
const connectDB = require('./config/db');

// Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bidderRoutes = require('./routes/bidderRoutes');
const spectatorRoutes = require('./routes/spectatorRoutes');

// Socket Manager
const initSockets = require('./sockets/index');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// ---------- MIDDLEWARE ----------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- CONNECT DATABASE ----------
connectDB();

// ---------- API ROUTES ----------
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/bidder', bidderRoutes);
app.use('/api/spectator', spectatorRoutes);

// ---------- SERVE STATIC FILES (optional) ----------
app.use('/public', express.static(__dirname + '/public'));

// ---------- INITIALIZE SOCKETS ----------
initSockets(server);

// ---------- START SERVER ----------
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
