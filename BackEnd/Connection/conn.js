// import mongoose from 'mongoose';

// const ConnectDB = async () => {
//   try {
//     // Removed useNewUrlParser and useUnifiedTopology options
//     await mongoose.connect('mongodb://127.0.0.1:27017/event');
//     console.log('✅ MongoDB connected');
//   } catch (err) {
//     console.error('❌ Failed to connect to MongoDB:', err.message);
//     throw err; // rethrow error to let index.js handle it
//   }
// };

// export default ConnectDB;

// import mongoose from 'mongoose';

// const ConnectDB = async () => {
//   try {
//     // Get URI and remove ALL possible whitespace/invisible characters
//     let mongoURI = process.env.MONGO_URI;

//     if (!mongoURI) {
//       throw new Error('MONGO_URI is not defined in environment variables');
//     }

//     // Clean the URI - remove spaces, tabs, newlines, zero-width characters
//     mongoURI = mongoURI.replace(/[\s\u200B-\u200D\uFEFF\u0000-\u001F]/g, '');

//     console.log('🔍 Cleaned URI starts with:', mongoURI.substring(0, 20));

//     if (!mongoURI.startsWith('mongodb://') && !mongoURI.startsWith('mongodb+srv://')) {
//       console.log('❌ URI does not start correctly');
//       console.log('First 50 chars:', mongoURI.substring(0, 50));
//       throw new Error('Invalid MONGO_URI format. It should start with mongodb:// or mongodb+srv://');
//     }

//     await mongoose.connect(mongoURI, {
//       serverSelectionTimeoutMS: 10000,
//     });

//     console.log('✅ MongoDB Atlas connected successfully!');
//     console.log('📊 Database:', mongoose.connection.name);
//   } catch (err) {
//     console.error('❌ Failed to connect to MongoDB Atlas:', err.message);
//     throw err;
//   }
// };

// export default ConnectDB;

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
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//   credentials: true
// }));
app.use(cors({
  origin: [
    'http://localhost:5173',           // Local Vite dev server
    'http://localhost:3000',           // Alternative local port
    'https://event-mern.netlify.app'   // Your Netlify domain
  ],
  credentials: true,                   // Allow cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/message', messageRouter);
app.use('/api/auth', userRouter);
app.get("/", (req, res) => {
  res.send("BackEnd Running 🚀")
})
app.get('/api/health', (req, res) => {
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
    mongoURI_exists: !!process.env.MONGO_URI,
    mongoURI_preview: process.env.MONGO_URI?.substring(0, 30) || 'not set'
  });
});

// Connect to DB
ConnectDB()
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Only listen locally, Vercel handles this in prod
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// ✅ ES Module export for Vercel
export default app;