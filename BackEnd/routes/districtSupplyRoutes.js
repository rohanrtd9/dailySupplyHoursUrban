const express = require('express');
const router = express.Router();
const districtSupplyRepository = require('../repositories/districtSupplyRepository');

// Create a new districtSupply
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const result = await districtSupplyRepository.insert(data);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a districtSupply by districtCode
router.delete('/:districtCode', async (req, res) => {
  try {
    const districtCode = req.params.districtCode;
    const result = await districtSupplyRepository.delete(districtCode);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a districtSupply by districtCode
router.put('/:districtCode', async (req, res) => {
  try {
    const districtCode = req.params.districtCode;
    const data = req.body;
    const result = await districtSupplyRepository.update(districtCode, data);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get districtSupply by districtCode
router.get('/:districtCode', async (req, res) => {
  try {
    const districtCode = req.params.districtCode;
    const result = await districtSupplyRepository.getByDistrictCode(districtCode);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
