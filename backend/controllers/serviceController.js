// -------------------------------------------------
// Service Controller
// Handles all service-related API logic
// -------------------------------------------------

const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
  try {
    const services = await Service.find({}).sort({ category: 1, name: 1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Get single service by ID
// @route   GET /api/services/:id
// @access  Public
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Create a new service
// @route   POST /api/services
// @access  Admin
const createService = async (req, res) => {
  try {
    const { name, category, description, price, duration, image } = req.body;
    const service = new Service({ name, category, description, price, duration, image });
    const createdService = await service.save();
    res.status(201).json(createdService);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data: ' + error.message });
  }
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Admin
const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      service.name = req.body.name || service.name;
      service.category = req.body.category || service.category;
      service.description = req.body.description || service.description;
      service.price = req.body.price || service.price;
      service.duration = req.body.duration || service.duration;
      service.image = req.body.image || service.image;
      const updatedService = await service.save();
      res.json(updatedService);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data: ' + error.message });
  }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Admin
const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      await Service.deleteOne({ _id: req.params.id });
      res.json({ message: 'Service removed successfully' });
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
