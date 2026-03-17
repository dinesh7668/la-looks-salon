// -------------------------------------------------
// Auth Controller
// Handles admin login
// -------------------------------------------------

const jwt = require('jsonwebtoken');

// @desc    Admin Login
// @route   POST /api/auth/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (username === adminUsername && password === adminPassword) {
      // Generate token
      const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '1d',
      });

      res.status(200).json({
        success: true,
        token,
        message: 'Login successful',
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports = {
  loginAdmin,
};
