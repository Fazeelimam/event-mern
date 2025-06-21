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
//   origin: "https://event-mern-frontend.vercel.app",
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

// // 2nd
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

// // Allow multiple frontend origins (for dev, prod, test)
// const allowedOrigins = [
//   "https://event-mern-frontend.vercel.app",
//   "https://event-mern-frontend-myportfolio-projects.vercel.app"
// ];

// // CORS middleware
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));

// // Basic middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Debug incoming origin (optional)
// app.use((req, res, next) => {
//   console.log("🛡️ Origin:", req.headers.origin);
//   next();
// });

// // API Routes
// app.use('/api/auth', userRouter);
// app.use('/api/message', messageRouter);

// // Start server after DB connection
// const startServer = async () => {
//   try {
//     await ConnectDB();
//     console.log("✅ MongoDB connected");

//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running at http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1); // Exit app
//   }
// };

// startServer();


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// ✅ Correct paths (no extra "api/", lowercase folders)
import ConnectDB from './connection/conn.js';
import userRouter from './Router/auth.js';
import messageRouter from './Router/message.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

const allowedOrigins = [
  "https://event-mern-frontend.vercel.app",
  "https://event-mern-frontend-myportfolio-projects.vercel.app"
];

// ✅ CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ✅ Body parsing and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔍 Debug log for origin
app.use((req, res, next) => {
  console.log("🛡️ Origin:", req.headers.origin);
  next();
});

// ✅ Routes
app.use('/api/auth', userRouter);
app.use('/api/message', messageRouter);

// ✅ Root test route
app.get('/', (req, res) => {
  res.status(200).json({ message: "✅ Backend is running" });
});

// ✅ MongoDB connection and server start
const startServer = async () => {
  try {
    await ConnectDB();
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
