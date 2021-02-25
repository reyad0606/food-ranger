const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

//Routes
const restaurantsRoute = require('./routes/restaurants');

app.use('/restaurants', restaurantsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log('connected to db');
  }
);

app.listen(5000);
