const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  type: { type: String, required: true },
  coverageAmount: { type: Number, required: true },
  premium: { type: Number, required: true },
  termLength: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Policy', policySchema);
