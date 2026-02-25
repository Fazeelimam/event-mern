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
import userRouter from '../router/auth.js';
import messageRouter from '../router/message.js';
import ConnectDB from '../Connection/conn.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
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