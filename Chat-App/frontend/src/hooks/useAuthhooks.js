import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import generateJWT from "../lib/generateJWT.js";

export const signUp = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  const username = data.username;
  const email = data.email;
  const password = data.password;
  const avatar = data.avatarUrl || "https://example.com/default-avatar.png";
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!hashPassword) {
      return res.status(404).json({
        message: "Password hashing failed",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new userModel({
      username,
      email,
      password: hashPassword,
      avatar,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    user.isOnline = true;
    await user.save();

    const token = generateJWT(user._id, res);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        isOnline: user.isOnline,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error during login",
      error: error.message,
    });
  }
};

export const SignOut = async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.user._id, {
      isOnline: false,
    });

    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during logout",
      error: error.message,
    });
  }
};

export const checkAuth = async (req, res) => {
  try {
    if (!res.req.user) {
      return res.status(401).json({
        message: "Unauthorized access",
      });
    }
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error during authentication check",
      error: error.message,
    });
  }
};

// export const getUserProfile = async (req, res) => {
//   try {
//     const user = await userModel.findById(req.user._id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       success: true,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         avatar: user.avatar,
//         isOnline: user.isOnline,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// export const updateUserProfile = async (req, res) => {
//   try {
//     const { username, email, avatar } = req.body;
//     const userId = req.user._id;

//     // Validate input
//     if (!username || !email) {
//       return res.status(400).json({ message: "Username and email are required" });
//     }

//     // Check if username/email already exists (excluding current user)
//     const existingUser = await userModel.findOne({
//       $and: [
//         { _id: { $ne: userId } },
//         { $or: [{ username }, { email }] }
//       ]
//     });

//     if (existingUser) {
//       return res.status(400).json({
//         message: "Username or email already exists"
//       });
//     }

//     // Update user
//     const updatedUser = await userModel.findByIdAndUpdate(
//       userId,
//       { username, email, avatar },
//       { new: true, runValidators: true }
//     ).select('-password');

//     res.status(200).json({
//       success: true,
//       message: "Profile updated successfully",
//       user: {
//         id: updatedUser._id,
//         username: updatedUser.username,
//         email: updatedUser.email,
//         avatar: updatedUser.avatar,
//         isOnline: updatedUser.isOnline
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server error",
//       error: error.message
//     });
//   }
// };
