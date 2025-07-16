import express from 'express';

const authRouter = express.Router();
import { registerUser, signIn } from '../controllers/auth.controllers.js'; // Import the registerUser controller
import auth from '../../../assssss/dfrd.js';

// Route for user registration
authRouter.post('/register', registerUser);
auth

export default authRouter;