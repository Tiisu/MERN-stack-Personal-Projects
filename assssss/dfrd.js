// Import required packages
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Authentication middleware function
const auth = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.header('Authorization');
    
    // Check if Authorization header exists
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'No authorization header, access denied'
      });
    }
    
    // Extract token (remove "Bearer " prefix)
    const token = authHeader.replace('Bearer ', '');
    
    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided, access denied'
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user by ID from token
    const user = await User.findById(decoded.userId).select('-password');
    
    // Check if user still exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Token is valid but user no longer exists'
      });
    }
    
    // Add user to request object so routes can access it
    req.user = user;
    
    // Continue to the next middleware/route
    next();
    
  } catch (error) {
    // Token is invalid
    console.error('Auth middleware error:', error);
    res.status(401).json({
      success: false,
      message: 'Token is not valid'
    });
  }
};

// Export the middleware
module.exports = auth;