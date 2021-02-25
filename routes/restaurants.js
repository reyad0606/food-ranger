const express = require('express');

const router = express.Router();

const Restaurant = require('../models/Restaurant');

router.post('/', async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    location: req.body.location,
    foodMenu: req.body.foodMenu,
    userReview: req.body.userReview,
    userRating: req.body.userRating,
    image: req.body.image,
  });

  try {
    const savedRestaurant = await restaurant.save();
    res.json(savedRestaurant);
  } catch (error) {
    res.json(console.log(error));
  }
});

router.get('/', async (req, res) => {
  try {
    const getRestaurants = await Restaurant.find();
    res.json(getRestaurants);
  } catch (error) {
    res.json(console.log(error));
  }
});

router.get('/specific', (req, res) => {
  res.send('we are on specific restaurant');
});

module.exports = router;
