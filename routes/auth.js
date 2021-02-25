const express = require('express');

const router = express.Router();

const Auth = require('../models/Auth');

router.post('/login', async (req, res) => {
  const login = new Auth({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedLogin = await login.save();
    res.json(savedLogin);
  } catch (error) {
    res.json(console.log(error));
  }
});

router.get('/users', async (req, res) => {
  try {
    const getUsers = await Auth.find();
    res.json(getUsers);
  } catch (error) {
    res.json(console.log(error));
  }
});

router.get('/users/:userID', async (req, res) => {
  try {
    const specificUser = await Auth.findById(req.params.userID);
    res.json(specificUser);
  } catch (error) {
    res.json(console.log(error));
  }
});

module.exports = router;
