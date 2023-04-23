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
      res.status(201).json({ message: "Successfully Signed Up" });
    });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
};