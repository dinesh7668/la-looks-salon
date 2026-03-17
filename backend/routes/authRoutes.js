// -------------------------------------------------
// Auth Routes
// -------------------------------------------------

const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/authController');

// Map route to controller function
router.post('/login', loginAdmin);

module.exports = router;
