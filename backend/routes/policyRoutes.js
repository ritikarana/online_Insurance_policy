const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getPolicies, createPolicy } = require('../controllers/policyController');
const router = express.Router();

router.get('/', protect, getPolicies);
router.post('/', protect, createPolicy);

module.exports = router;
