const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const saved = await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: saved });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

