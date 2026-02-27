// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import userRouter from './router/auth.js';
// import messageRouter from './router/message.js';
// import ConnectDB from './Connection/conn.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 2000;

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173', // Frontend port
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use('/api/message', messageRouter);
// app.use('/api/auth', userRouter);

// // Start the server **after successful MongoDB connection**
// const startServer = async () => {
//   try {
//     await ConnectDB(); // Wait for DB connection
//     console.log('✅ MongoDB connected');

//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error('❌ Failed to connect to MongoDB:', err.message);
//     process.exit(1); // Exit the app if DB fails to connect
//   }
// };

// startServer();

// module.exports = app;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import userRouter from './router/auth.js';
import messageRouter from './router/message.js';
import ConnectDB from './Connection/conn.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// CORS - Allow multiple origins
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://event-mern.netlify.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to MongoDB
ConnectDB().catch(err => console.error("MongoDB connection error:", err));

// Home route
app.get("/", (req, res) => {
  res.send("BackEnd Running 🚀");
});

// Health check
app.get('/api/health', async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };

    res.json({
      status: 'ok',
      mongodb: states[dbState],
      connected: dbState === 1
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
});

// Routes
app.use('/api/message', messageRouter);
app.use('/api/auth', userRouter);

// For local development
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Export for Vercel (ES Module syntax)
export default app;