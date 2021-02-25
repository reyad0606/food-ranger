const express = require('express');

const router = express.Router();

const Auth = require('../models/Auth');

router.post('/', async (req, res) => {
  const auth = new Auth({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedAuth = await auth.save();
    res.json(savedAuth);
  } catch (error) {
    res.json(console.log(error));
  }
});

router.get('/', async (req, res) => {
  try {
    const getUser = await Auth.find();
    res.json(getUser);
  } catch (error) {
    res.json(console.log(error));
  }
});

module.exports = router;
