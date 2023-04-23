const express = require('express');
const router = express.Router();
const userControlller = require('../controllers/user-controller');

router.post('/signUp', userControlller.signUp);
router.post('/login', userControlller.login);

module.exports = router;