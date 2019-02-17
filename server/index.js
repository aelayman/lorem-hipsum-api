const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000; // this can be very useful if you deploy to Heroku!
const db = require('./db'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('dev'));

const words = ['hello', 'world', 'hi']

app.get('/', (req, res) => res.status(200).send(words))

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