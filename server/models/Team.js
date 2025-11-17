const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: String,
  ownerUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  purse: { type: Number, default: 200000000 } // example default ₹2 Crore = 200,000,000 paise? here rupees
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);
