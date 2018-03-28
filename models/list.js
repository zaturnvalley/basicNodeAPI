// Require
const mongoose = require('mongoose');

// Schema
const BucketlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    required: true,
    enum: ['High', 'Medium', 'Low']
  }
});