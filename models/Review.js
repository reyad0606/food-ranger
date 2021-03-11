const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  email: {
    type: String,
    reauired: true,
  },
  restaurant: {
    type: String,
    reauired: true,
  },
  userReview: {
    comment: { type: String, reauired: true },

    rating: {
      type: Number,
      reauired: true,
    },
  },
});

module.exports = mongoose.model('Review', ReviewSchema);
