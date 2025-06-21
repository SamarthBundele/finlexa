const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Waitlist', waitlistSchema);
