// Import the necessary dependencies
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);  // Exit if database fails
  }
};

// module.exports = connectDB;
export default connectDB;