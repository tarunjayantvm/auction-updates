const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin','bidder','spectator'], required: true },
  teamName: { type: String },     // for bidder
  purse: { type: Number, default: 0 }, // in rupees (store as integer)
  active: { type: Boolean, default: true },
  frozen: { type: Boolean, default: false } // admin freeze
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
