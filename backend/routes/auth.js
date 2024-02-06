const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?image=${randomAvatar}`;
};

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const defautAvatar = generateRandomAvatar();

    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingUser || existingUsername) {
      return res
        .status(400)
        .json({ message: "Email or Username is already registed" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: defautAvatar,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: `User created successfully. User: ${newUser}` });

    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPassswordVaid = await bcrypt.compare(password, user.password);
    if (!isPassswordVaid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Server Error: ${error}` });
  }
});

module.exports = router;
