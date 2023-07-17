const districtSupply = require('../models/districtSupply');

// Repository for districtSupply model
const districtSupplyRepository = {
  insert: async (data) => {
    try {
      const newDistrictSupply = new districtSupply(data);
      const result = await newDistrictSupply.save();
      return result;
    } catch (error) {
      throw error;
    }
  },
  delete: async (districtCode) => {
    try {
      const result = await districtSupply.findOneAndDelete({ DISTRICT_CODE: districtCode });
      return result;
    } catch (error) {
      throw error;
    }
  },
  update: async (districtCode, data) => {
    try {
      const result = await districtSupply.findOneAndUpdate({ DISTRICT_CODE: districtCode }, data, { new: true });
      return result;
    } catch (error) {
      throw error;
    }
  },
  getByDistrictCode: async (districtCode) => {
    try {
      const result = await districtSupply.findOne({ DISTRICT_CODE: districtCode });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = districtSupplyRepository;

