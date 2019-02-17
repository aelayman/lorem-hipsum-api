const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000; // this can be very useful if you deploy to Heroku!
const db = require('./db');
const {Word} = require('../server/db/models')
const Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

// need to grab the number of words requested from the db and send back single paragraph

app.get('/', (req, res) => {
  // get num words from request
  const numWords = Number(req.query.numWords);
  Word.findAll({ order: Sequelize.literal('random()'), limit: numWords })
  .then((wordRecords) => {
    const words = wordRecords.map(record => record.word);
    const paragraphWords = words.join(' ');
    res.status(200).send(paragraphWords);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

db.sync()  // sync our database
  .then(function(){
    app.listen(port, function () {
      console.log(`listenin on ${port}`)
    }) // then start listening with our express server once we have synced
  })

app.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});