import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './router/auth.js';
import messageRouter from './router/message.js';
import ConnectDB from './Connection/conn.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Frontend port
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/message', messageRouter);
app.use('/api/auth', userRouter);

// Start the server **after successful MongoDB connection**
const startServer = async () => {
  try {
    await ConnectDB(); // Wait for DB connection
    console.log('✅ MongoDB connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the app if DB fails to connect
  }
};

startServer();