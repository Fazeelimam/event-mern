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
// // app.use(cors({
// //   origin: process.env.FRONTEND_URL || 'http://localhost:5173',
// //   credentials: true
// // }));
// app.use(cors({
//   origin: [
//     'http://localhost:5173',           // Local Vite dev server
//     'http://localhost:3000',           // Alternative local port
//     'https://event-mern.netlify.app'   // Your Netlify domain
//   ],
//   credentials: true,                   // Allow cookies
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use('/api/message', messageRouter);
// app.use('/api/auth', userRouter);
// app.get("/", (req, res) => {
//   res.send("BackEnd Running 🚀")
// })
// app.get('/api/health', (req, res) => {
//   const dbState = mongoose.connection.readyState;
//   const states = {
//     0: 'disconnected',
//     1: 'connected',
//     2: 'connecting',
//     3: 'disconnecting'
//   };

//   res.json({
//     status: 'ok',
//     mongodb: states[dbState],
//     mongoURI_exists: !!process.env.MONGO_URI,
//     mongoURI_preview: process.env.MONGO_URI?.substring(0, 30) || 'not set'
//   });
// });

// // Connect to DB
// ConnectDB()
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("MongoDB error:", err));

// // Only listen locally, Vercel handles this in prod
// if (process.env.NODE_ENV !== 'production') {
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });
// }

// // ✅ ES Module export for Vercel
// export default app;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose'; // ← ADD THIS IMPORT
import userRouter from './router/auth.js';
import messageRouter from './router/message.js';
import ConnectDB from './Connection/conn.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// CORS Middleware
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

// Home route
app.get("/", (req, res) => {
  res.send("BackEnd Running 🚀");
});

// Health check
app.get('/api/health', async (req, res) => {
  try {
    await ConnectDB(); // Ensure connection before checking

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
      connected: dbState === 1,
      mongoURI_exists: !!process.env.MONGO_URI
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      mongodb: 'failed',
      error: error.message
    });
  }
});

// Routes
app.use('/api/message', messageRouter);
app.use('/api/auth', userRouter);

// Connect to MongoDB (for local development)
if (process.env.NODE_ENV !== 'production') {
  ConnectDB()
    .then(() => {
      console.log("✅ MongoDB connected");
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB error:", err);
      process.exit(1);
    });
} else {
  // In production (Vercel), connect on first request
  ConnectDB().catch(err => console.error("Initial connection attempt:", err));
}

// ES Module export for Vercel
export default app;