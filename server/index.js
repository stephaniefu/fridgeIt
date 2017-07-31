const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/index');
const routes= require('./routes/router');
const model = require('../db/models/model');

const PORT = 3030;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use('/api', routes);
// app.use(express.static('client'));


app.listen(PORT, err => {
  if (err) {
    console.log(`Could not connect to PORT ${PORT}`)
  } else {
    console.log(`Successfully connected to PORT ${PORT}`)
  }
})