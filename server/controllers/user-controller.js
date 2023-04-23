const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const Secret_Key = process.env.TOKEN_SECRET_KEY;

const generateAccessToken = (id, name) => {
  return jwt.sign({ userId: id, name: name }, Secret_Key);
};

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

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const users = await User.findOne({ where: { email: email } });
    bcrypt.compare(password, users.password, (err, response) => {
      if (response == true) {
        res
          .status(200)
          .json({
            message: "Logged In Successfully..!",
            token: generateAccessToken(users.id, users.name),
          });
      } else {
        res.status(400).json({ error: "Invalid Email or Password" });
      }
    });
  } catch (error) {
    res.status(404).json({ error: "User Not Found" });
  }
};