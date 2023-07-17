const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  uID: {
    type: String,
    required: true,
    unique: true
  },
  DIVISION_NAME_NIC: {
    type: String,
    required: true
  },
  DIVISION_CODE_NIC: {
    type: Number,
    required: true
  },
  DISTRICT_CODE_NIC: {
    type: [Number],
    required: true
  },
  DISTRICT_NAME_NIC: {
    type: [String],
    required: true
  },
  URBAN_SCHEDULED: {
    type: [Number],
    required: true
  },
  RURAL_SCHEDULED: {
    type: [Number],
    required: true
  },
  ZONE_NAME_UPPCL: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('District', districtSchema);
