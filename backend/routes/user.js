const express = require('express');
const User = require('../models/User'); // Create a User model
const router = express.Router();

// Create or update user
router.post('/', async (req, res) => {
  const { userId, data } = req.body; // Assuming userId and data are sent in the body

  try {
    const user = await User.findOneAndUpdate(
      { auth0Id: userId },
      { $set: data },
      { new: true, upsert: true } // Create if not found
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
