require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('../database/mongoose.config');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use(cors())

const PORT = process.env.PORT;

// import route handlers
const search = require('./api/search');
const profile = require('./api/profile');


// routes
app.use('/search', search);
app.use('/profile', profile);

app.use((req, res, next) => {
  res.status(404).send({ pageTitle: 'Page Not Found', path: '/404' });
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});