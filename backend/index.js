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
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB Error:', err));

// Routes (Example)
app.get('/', (req, res) => {
  res.send('Finlexa Backend Running');
});

// Add your routes here

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
