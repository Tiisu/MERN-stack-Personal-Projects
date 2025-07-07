// importing necessary dependencies

import dotenv from 'dotenv';
import express from 'express';

// Creating an instance of express
const app = express();
dotenv.config();



// Creating the first route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working!' });
});

app.post('/users', (req, res) => {
  // This is a placeholder for user creation logic
  res.status(201).json({ message: 'User created successfully!' });
});

app.listen(() => {
  console.log('Server is running on port '+ process.env.PORT);
});