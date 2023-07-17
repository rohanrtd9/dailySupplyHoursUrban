const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the districtSupply model
const districtSupplySchema = new Schema({
  DIVISION_NAME_NIC: {
    type: String,
    required: true
  },
  GROUP_ID: {
    type: String,
    required: true
  },
  STATE_CODE: {
    type: String,
    required: true
  },
  STATE_NAME: {
    type: String,
    required: true
  },
  DISTRICT_CODE: {
    type: String,
    required: true,
    unique: true
  },
  DISTRICT_NAME: {
    type: String,
    required: true
  },
  SCHEDULED: {
    type: Number,
    required: true
  },
  GIVEN: {
    type: Number,
    required: true
  },
  PERCENT_GIVEN_VS_SCHEDULED: {
    type: Number,
    required: true
  }
});

// Create the districtSupply model based on the schema
const districtSupply = mongoose.model('districtSupply', districtSupplySchema);

module.exports = districtSupply;
