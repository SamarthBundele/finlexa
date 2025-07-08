let isConnected;

const mongoose = require('mongoose');

async function dbConnect() {
  if (isConnected) {
    console.log('✅ Using existing DB connection');
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30s timeout for serverless
  });

  isConnected = db.connections[0].readyState;
  console.log('✅ New DB connection established');
}

module.exports = dbConnect;
