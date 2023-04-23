const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.signUp = async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      let response = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        password: hash,
      });
      res.status(201).json({ message: "User Created Successfully" });
    });
  } catch (error) {
    res.status(400).json({ error: "User Already Exists" });
  }
};