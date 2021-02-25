const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(express.json());

//Routes
const restaurantsRoute = require('./routes/restaurants');
const authRoute = require('./routes/auth');

app.use('/restaurants', restaurantsRoute);
app.use('/auth', authRoute);

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
