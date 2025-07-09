// importing necessary dependencies

import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import ProductModel from './models/productsModels.js';
import producRouter from './routes/productsRoute.js';

// Creating an instance of express
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/products', producRouter)


dotenv.config();

await connectDB();

const PORT = process.env.PORT ;

// Creating the first route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT,() => {
  console.log('Server is running on port '+ process.env.PORT);
});