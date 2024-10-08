  // controllers/userController.js
  import User from '../models/userModel.js';
  import { v4 as uuidv4 } from 'uuid';
  import bcrypt from 'bcrypt'; // Thêm dòng này để import bcrypt
  import jwt from 'jsonwebtoken'; // Ensure JWT is imported
  // Create User Function
  // Create User Function
  export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Tất cả các trường là bắt buộc." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({ message: "Người dùng đã được tạo", user: newUser });
    } catch (error) {
        console.error("Validation error details:", error.errors); // Ghi log chi tiết
        return res.status(500).json({ message: "Đã xảy ra lỗi", error: error.errors });
    }
  };



  // Login User Function
  // Chỉ kiểm tra email và mật khẩu mà không tạo JWT

  export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    console.log('Email:', email); // Debug
    console.log('Password:', password); // Debug
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: "Người dùng không tồn tại" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Is Password Valid:', isPasswordValid); // Debug
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Mật khẩu không chính xác" });
      }
  
      res.status(200).json({
        message: "Đăng nhập thành công",
        user: { id: user.id, name: user.name, email: user.email }
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi", error });
    }
  };


// Define and export the function to get the current user
export const getCurrentUser = async (req, res) => {
  const { email } = req.body; // Lấy email từ body của yêu cầu

  if (!email) {
    return res.status(400).json({ message: "Email không được cung cấp" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi", error });
  }
};