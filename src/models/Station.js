const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"], // 'location.type' must be 'Point'
    default: "Point"
  },
  coordinates: {
    type: [Number],
    required: true
  }
});
const schema = new mongoose.Schema({
  address: String,
  code: String, // Unique code of the station, to enable charging.
  location: locationSchema, // Location of the station for geographical queries
  city: String,
  type: String,
  speed: {
    // Speed in kWh
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },
  connectorType: String,
  currentEngagement: {
    status: Boolean,
    with: mongoose.SchemaTypes.ObjectId
  }
});

const station = mongoose.model("Station", schema);
module.exports = station;
