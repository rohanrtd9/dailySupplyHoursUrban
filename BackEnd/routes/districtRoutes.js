const districtsRepository = require('../repositories/districtsRepository');

const router = require('express').Router();

// POST /districs/
router.post('/insertAll', async (req, res) => {
  try {
    const districts = req.body; // Assuming request body contains an array of district objects
    console.log(req.body);
    const savedDistricts = await districtsRepository.saveMany(districts);
    res.json(savedDistricts);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to insert districts' });
  }
});
// Route to get districts by UID
router.post('/fetch/:uid', async (req, res) => {
  try {
    console.log(req.params);
    const uid = req.params.uid;
    console.log(uid);
    const districts = await districtsRepository.getByUid(uid);
    res.json(districts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get districts by UID' });
  }
  } 
);
router.post('/fetchAll', async (req, res) => {
  try {
    console.log(req.params);

    const districts = await districtsRepository.getAll();
    res.json(districts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get districts by UID' });
  }
  
});

module.exports = router;
