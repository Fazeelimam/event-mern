import mongoose from 'mongoose';

const ConnectDB = async () => {
  try {
    // Removed useNewUrlParser and useUnifiedTopology options
    await mongoose.connect('mongodb://127.0.0.1:27017/event');
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    throw err; // rethrow error to let index.js handle it
  }
};

export default ConnectDB;
