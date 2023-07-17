const District = require('../models/districtsModel');

// Repository for CS3AModel
const CS3ARepository = {
  saveMany:async (districts)=> {
    try {
      const savedDistricts = await District.insertMany(districts);
      return savedDistricts;
    } catch (error) {
      throw new Error('Failed to save districts'+ error.message);
    }
  },

  getByUid:async (uid) =>{
    try {
      const districts = await District.find({ uID: uid });
      return districts;
    } catch (error) {
      throw new Error('Failed to get districts by UID');
    }
  },
  getAll: async () => {
    try {
      const districts = await District.find({});
      return districts;
    } catch (error) {
      throw new Error('Failed to get all districts');
    }
  },
}

module.exports = CS3ARepository;