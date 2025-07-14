import bcrypt from 'bcrypt';

import User from '../models/user.models.js';

export const registerUser = async (req, res) => {
    const { username, email, password, avatar } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {

        // validate password length
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        // encrpyt passowrd using bcrypt
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

            if (!hashedPassword) {
                return res.status(500).json({ message: 'Error hashing password' });
            }
    
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
    
            // Create new user
            const newUser = new User({
                username,
                email,
                password: hashedPassword, // Password is hashed before saving
                avatar,
                isOnline: false // New users start offline
            });
    
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }