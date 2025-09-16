const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, trim: true },
  status: { type: String, enum: ['Active', 'Inactive', 'Pending'], default: 'Active' },
  joined: { type: Date, default: Date.now },
  email: { type: String, unique: true, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  notes: { type: String, trim: true }
}, { timestamps: true });

partnerSchema.index({ email: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('Partner', partnerSchema);
