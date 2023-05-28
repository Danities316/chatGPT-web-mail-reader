const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Get all chat messages
router.get('/', chatController.getAllChatMessages);

// Create a new chat message
router.post('/', chatController.createChatMessage);

module.exports = router;
