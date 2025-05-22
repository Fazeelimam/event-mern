import bcrypt from "bcryptjs"
import Users from "../model/user.js"
import { GenerateToken } from "../lib/Generate.js";

export const Signup = async (req, res) => {
    try {
      const { name, email, password, contact } = req.body;
  
      if (!name || !email || !password || !contact) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      if (name.length < 3) {
        return res.status(400).json({ message: "Name must contain at least 3 characters!" });
      }
  
      if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters!" });
      }
  
      const user = await Users.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "Email is already in use" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(password, salt);
  
      const newUser = new Users({ name, email, password: hashed_password, contact });
  
      if (newUser) {
        await newUser.save();
        GenerateToken(newUser._id, res);  // Set the cookie
  
        // ✅ Send only one response
        return res.status(201).json({
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          contact: newUser.contact,
          message: "User Registered Successfully!"
        });
      } else {
        return res.status(400).json({ message: "Invalid User Data" });
      }
  
    } catch (error) {
      return res.status(500).json({ message: "Error registering user", error: error.message });
    }
  };
  
  export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
      }
  
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Password is incorrect!" });
      }
  
      const token = GenerateToken(user._id, res);
  
      return res.status(200).json({
        message: "Login successful",
        _id: user._id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        token, // ✅ Return token for frontend
      });
  
    } catch (error) {
      console.error("Error in Login Controller:", error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  
  
  export const LogOut = (req, res) => {
    try {
      res.cookie("jwt", "", { maxAge: 0, httpOnly: true, secure: process.env.NODE_ENV === 'production' });

      res.status(200).json({ message: "Logout Successfully!" });
    } catch (error) {
      console.log("Error in LogOut Controller:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  