const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Get all emails
router.get('/', emailController.getAllEmails);

// Create a new email
router.post('/', emailController.createEmail);

module.exports = router;
