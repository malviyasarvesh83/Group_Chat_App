const express = require('express');
const router = express.Router();
const userControlller = require('../controllers/user-controller');
const Authorization = require('../middleware/auth');

router.post('/signUp', Authorization.authenticate, userControlller.signUp);

module.exports = router;