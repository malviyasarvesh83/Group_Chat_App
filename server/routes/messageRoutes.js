const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message-controller');
const Authorization = require('../middleware/auth');

router.post('/allMessage', Authorization.authenticate, messageController.postMessage);
router.get('/getMessage', Authorization.authenticate, messageController.getMessages);
router.delete('/deleteMessage/:id', Authorization.authenticate, messageController.deleteMessages);

module.exports = router;