import express from 'express';

const authRouter = express.Router();
import { registerUser } from '../controllers/auth.controllers.js'; // Import the registerUser controller

// Route for user registration
authRouter.post('/register', registerUser);

export default authRouter;