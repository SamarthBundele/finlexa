const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const {register}= require('../controllers/auth')

// Register
router.post('/register', register);

module.exports = router;

