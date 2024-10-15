const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true },
  // Add other fields you want to store
  data: { type: Object } // Use an object to store custom user data
});

module.exports = mongoose.model('User', userSchema);
