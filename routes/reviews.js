const express = require('express');

const router = express.Router();

const Review = require('../models/Review');

//Create New Data
router.post('/', async (req, res) => {
  const review = new Review({
    name: req.body.name,
    location: req.body.location,

    userReview: req.body.userReview,

  });

  try {
    const savedRestaurant = await restaurant.save();
    res.json(savedRestaurant);
  } catch (error) {
    res.json(console.log(error));
  }
});

module.exports = router;
