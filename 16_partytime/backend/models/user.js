const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  
})

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;