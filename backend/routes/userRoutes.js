const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Make sure filename matches case (Linux is case-sensitive)
const { register } = require('../controllers/auth');
const dbConnect = require('../utils/dbConnect'); // Import cached DB connection utility

// Middleware to ensure DB connection is established
router.use(async (req, res, next) => {
  try {
    await dbConnect();
    next();
  } catch (err) {
    console.error('❌ DB connection error in userRoute:', err);
    return res.status(500).json({ error: 'Database connection failed' });
  }
});

// Register route
router.post('/register', register);

module.exports = router;
