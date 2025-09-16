const Partner = require('../models/Partner');

// @desc    Get all partners
// @route   GET /api/partners
// @access  Public
const getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: partners.length,
      data: partners
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching partners',
      error: error.message
    });
  }
};

// @desc    Get single partner
// @route   GET /api/partners/:id
// @access  Public
const getPartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    
    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      success: true,
      data: partner
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching partner',
      error: error.message
    });
  }
};

// @desc    Create new partner
// @route   POST /api/partners
// @access  Public
const createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);
    
    res.status(201).json({
      success: true,
      data: partner
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }
    
    res.status(400).json({
      success: false,
      message: 'Error creating partner',
      error: error.message
    });
  }
};

// @desc    Update partner
// @route   PUT /api/partners/:id
// @access  Public
const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      success: true,
      data: partner
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }
    
    res.status(400).json({
      success: false,
      message: 'Error updating partner',
      error: error.message
    });
  }
};

// @desc    Delete partner
// @route   DELETE /api/partners/:id
// @access  Public
const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Partner deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting partner',
      error: error.message
    });
  }
};

// @desc    Get partner statistics
// @route   GET /api/partners/stats
// @access  Public
const getPartnerStats = async (req, res) => {
  try {
    const totalPartners = await Partner.countDocuments();
    const activePartners = await Partner.countDocuments({ status: 'Active' });
    const inactivePartners = await Partner.countDocuments({ status: 'Inactive' });
    const distributors = await Partner.countDocuments({ type: 'Distributor' });
    const vendors = await Partner.countDocuments({ type: 'Vendor' });

    res.status(200).json({
      success: true,
      data: {
        total: totalPartners,
        active: activePartners,
        inactive: inactivePartners,
        distributors: distributors,
        vendors: vendors
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching partner statistics',
      error: error.message
    });
  }
};

module.exports = {
  getAllPartners,
  getPartner,
  createPartner,
  updatePartner,
  deletePartner,
  getPartnerStats
};
