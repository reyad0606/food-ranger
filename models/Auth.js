const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema({
  email: {
    type: String,
    reauired: true,
  },
  password: {
    type: String,
    reauired: true,
  },
});

module.exports = mongoose.model('Auth', AuthSchema);
