import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './lib/db.js'; // Import the database connection function
import authRouter from '../routes/auth.routes.js'; // Import authentication routes


dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors({
  origin: '*', // Allow all origins for CORS
  credentials: true // Allow credentials to be included in requests
})); // Enable CORS for all origins ( what is cors?  Cross-Origin Resource Sharing)



const PORT = process.env.PORT || 3000;
await connectDB(); // Connect to the MongoDB database

app.get('/', (req, res) => {
  res.send('Welcome to the Chat App!');
});

// Import routes
app.use('/api/auth', authRouter); // Use authentication routes under /api/auth


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});