const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  type: String,
  active: { type: Boolean, default: false }, // visible to bidders/spectators
  started: { type: Boolean, default: false }, // auction started
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  currentIndex: { type: Number, default: 0 }, // which player is currently on auction
  bidderLimit: { type: Number, default: 20 },
  bidIncrement: { type: Number, default: 500000 }, // in rupees (default ₹5 Lakh)
  timerSeconds: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
