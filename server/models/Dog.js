// Import mongoose
const mongoose = require('mongoose');

let DogModel = {};

// Define schema
const DogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// Create model from schema
DogModel = mongoose.model('Dog', DogSchema);

// Export model
module.exports = DogModel;
