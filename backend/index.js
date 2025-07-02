const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration
const corsOptions = {
  origin: ['https://finlexa.vercel.app', 'http://localhost:3000'], // ✅ Production + Local Dev
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ Allow common methods
  credentials: true, // ✅ Allow cookies / tokens
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ✅ Handle preflight requests

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ API Routes
const userRoutes = require('./routes/userRoutes');
const waitlistRoutes = require('./routes/waitlistRoutes');

app.use('/api/users', userRoutes);
app.use('/api/waitlist', waitlistRoutes);

// ✅ Health Check Route
app.get('/', (req, res) => {
  res.send('🌟 Finlexa Backend is alive and running!');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
