const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  country: String,
  role: String,
  age: Number,
  battingStyle: String,
  bowlingStyle: String,
  runs: Number,
  avg: Number,
  sr: Number,
  wickets: Number,
  er: Number,
  basePrice: Number, // in rupees
  imageUrl: String,
  sold: { type: Boolean, default: false },
  soldTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  soldPrice: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);
