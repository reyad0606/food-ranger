const express = require('express');

const mongoose = require('mongoose');

require('dotenv/config');

const app = express();

//Routes

// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
//   console.log('connected to DB')
// );

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
