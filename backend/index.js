const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  // No need for useNewUrlParser or useUnifiedTopology in modern Mongoose
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// API Routes
const userRoutes = require('./routes/userRoutes');
const waitlistRoutes = require('./routes/waitlistRoutes');

app.use('/api/users', userRoutes);
app.use('/api/waitlist', waitlistRoutes);

// Root path for testing
app.get('/', (req, res) => {
  res.send('Finlexa Backend is alive!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

