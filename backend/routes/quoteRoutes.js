const express = require('express');
const { generateQuote, purchasePolicy } = require('../controllers/quoteController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/generate', protect, generateQuote); // Generate insurance quote
router.post('/purchase', protect, purchasePolicy); // Purchase insurance policy

module.exports = router;
