// -------------------------------------------------
// Service Routes
// API endpoints for managing salon services
// -------------------------------------------------

const express = require('express');
const router = express.Router();
const {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require('../controllers/serviceController');

// GET /api/services       — Get all services
// POST /api/services      — Create a new service
router.route('/').get(getServices).post(createService);

// GET /api/services/:id   — Get single service
// PUT /api/services/:id   — Update a service
// DELETE /api/services/:id — Delete a service
router.route('/:id').get(getServiceById).put(updateService).delete(deleteService);

module.exports = router;
