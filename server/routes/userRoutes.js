const express = require('express');
const router = express.Router();
const userControlller = require('../controllers/user-controller');
const Authorization = require('../middleware/auth');

router.post('/signUp', userControlller.signUp);
router.post('/login', userControlller.login);
router.get('/allUsers', Authorization.authenticate, userControlller.getAllUser);

module.exports = router;