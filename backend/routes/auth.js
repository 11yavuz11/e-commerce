const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

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

module.exports = router;
