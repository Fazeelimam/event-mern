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


import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const ConnectDB = async () => {
  if (cached.conn) {
    console.log('✅ Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined');
    }

    console.log('🔄 Connecting to MongoDB...');

    cached.promise = mongoose.connect(mongoURI, {
      // Removed bufferCommands: false - this was causing the issue
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    }).then((mongoose) => {
      console.log('✅ MongoDB connected!');
      return mongoose;
    }).catch((err) => {
      console.error('❌ Connection failed:', err.message);
      cached.promise = null; // Reset on failure
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default ConnectDB;