require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/user_register", async (req, res) => {
  try {
    existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    const userSave = await user.save();
    if (userSave) {
      return res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to create user",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

router.post("/user_login", async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });

    if(!findUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email not found" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );

    if (validPassword) {
      // create sign in token
      const token = createToken(findUser._id);
      res.cookie("access-tokekn", token);
      return res.status(200).json({ success: true, user_id: findUser._id });

    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
