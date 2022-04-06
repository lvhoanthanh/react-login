const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  name: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  created_at: {
    type: Date,
    default: Date.new,
  },
  updated_at: {
    type: Date,
    default: Date.new,
  },
});

module.exports = mongoose.model("Class", classSchema);
