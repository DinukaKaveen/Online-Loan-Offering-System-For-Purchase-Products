require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

// user register
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

// user login
router.post("/user_login", async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });

    if (!findUser) {
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
      //store token in cookie
      res.cookie("access-token", token);

      //set session data
      req.session.user = {
        id: findUser._id,
        name: findUser.name,
      };

      return res
        .status(200)
        .json({ success: true, user_id: findUser._id, access_token: token });
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

// verify token
router.get("/verify_token", async (req, res) => {
  try {
    const token = req.cookies["access-token"];

    if (token) {
      const validateToken = await jwt.verify(token, process.env.JWT_SECRET);
      if (validateToken) {
        res.json({ verifyToken: true, message: "Token Verified" });
      } else {
        res.json({ verifyToken: false, message: "Token Expired" });
      }
    } else {
      res.json({ verifyToken: false, message: "Token Not Found" });
    }
  } catch (error) {
    console.error(error);
  }
});

//protected route
router.get("/protected", (req, res) => {
  if (req.session.user) {
    return res.json({
      protected: true,
      message: "Protected Route",
    });
  } else {
    return res.json({
      protected: false,
      message: "Unauthorized. Please login",
    });
  }
});

//logout session
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.clearCookie("access-token");
      res.clearCookie("connect.sid");
      res.json({ logout: true, message: "Logged out successfully" });
    }
  });
});

//get user
router.get("/get_session_user", async (req, res) => {
  if (req.session.user) {
    const user = await User.findById(req.session.user.id);
    if (user) {
      return res.json({
        session: true,
        user: user,
      });
    }
  } else {
    return res.json({
      session: false,
      message: "User not found. Please login",
    });
  }
});

module.exports = router;
