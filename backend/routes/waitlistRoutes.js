const express = require('express');
const router = express.Router();
const Waitlist = require('../models/waitlist');  // ✅ Model name should match file name

// ✅ Add to waitlist
router.post('/', async (req, res) => {
  console.log('📥 POST /api/waitlist hit');
  console.log('Request Body:', req.body);

  const { name, number, email } = req.body;

  // ✅ Validation
  if (!name || !number || !email) {
    console.log('❌ Validation failed: Missing fields');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    console.log('🔍 Checking for existing email...');
    const emailExists = await Waitlist.findOne({ email });
    if (emailExists) {
      console.log('⚠️ Email already on waitlist');
      return res.status(409).json({ message: 'Email already on waitlist' });
    }

    console.log('💾 Creating new waitlist entry...');
    const newEntry = new Waitlist({ name, number, email });
    const savedEntry = await newEntry.save();
    
    console.log('✅ Entry saved successfully:', savedEntry);
    res.status(201).json({ message: 'Added to waitlist', data: savedEntry });

  } catch (err) {
    console.error('❌ Error saving to database:', err);
    res.status(500).json({ error: 'Failed to save to database', details: err.message });
  }
});

// ✅ (Optional) View waitlist entries
router.get('/', async (req, res) => {
  try {
    const list = await Waitlist.find();
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
