const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  address: String,
  city: String,
  type: String,
  speed: {
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },
  connectorType: String
});

const station = mongoose.model("Station", schema);
module.exports = station;
