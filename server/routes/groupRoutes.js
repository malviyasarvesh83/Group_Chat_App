const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group-controller');

router.post('/addMember', groupController.createGroup);
router.get('/getGroups', groupController.getGroups);

module.exports = router;