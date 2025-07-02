const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;



const corsOptions = {
  origin: 'http://finlexa.vercel.app',  // ✅ Allow only this frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Optional: define allowed methods
  credentials: true // Optional: allow cookies/auth headers
};

app.use(cors(corsOptions));

// Middleware

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

