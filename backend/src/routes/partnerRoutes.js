const express = require('express');
const router = express.Router();
const {
  getAllPartners,
  getPartner,
  createPartner,
  updatePartner,
  deletePartner,
  getPartnerStats
} = require('../controllers/partnerController');

// @route   GET /api/partners/stats
// @desc    Get partner statistics
router.get('/stats', getPartnerStats);

// @route   GET /api/partners
// @desc    Get all partners
router.get('/', getAllPartners);

// @route   GET /api/partners/:id
// @desc    Get single partner
router.get('/:id', getPartner);

// @route   POST /api/partners
// @desc    Create new partner
router.post('/', createPartner);

// @route   PUT /api/partners/:id
// @desc    Update partner
router.put('/:id', updatePartner);

// @route   DELETE /api/partners/:id
// @desc    Delete partner
router.delete('/:id', deletePartner);

module.exports = router;
