const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const serverless = require('serverless-http');

const userRoutes = require('./routes/userRoutes');
const waitlistRoutes = require('./routes/waitlistRoutes');

const app = express();

// ✅ CORS Configuration
const corsOptions = {
  origin: '*', // ✅ Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: false // ⚠️ Credentials cannot be true with '*' origin
};


app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ Routes
app.use('/api/users', userRoutes);
app.use('/api/waitlist', waitlistRoutes);

// ✅ Health Check Route
app.get('/api/', (req, res) => {
  res.send('🌟 Finlexa Backend is alive and running!');
});

// ✅ Export for serverless
module.exports = app;
module.exports.handler = serverless(app);
