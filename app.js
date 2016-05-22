var debug = require('debug')('foodsessions:app');
var env = require('node-env-file');
var morgan = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var app = express();

// load env variables
if (process.env.NODE_ENV !== 'production') {
  env('.env');
}

//////////////////
// App Settings //
//////////////////

var config = process.env;

debug('Up!' + config);

///////////////////
// Express setup //
///////////////////

// Routes
var client = require('./routes/client'); // Client page route

// Middlewares
app.use(favicon(path.join(__dirname + '/public', 'favicon.ico')));
app.use(morgan('dev')); // use 'combined' for complete headers
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// View engine setup
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Public folder setup
app.use(express.static(path.join(__dirname, 'public')));

// Attach app views (aka pages)
app.use('/', client); // Client page view

// Attach API routes
// TODO

// Catch 404 and next() to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler development (will print stacktrace)
app.use(function(err, req, res) {
  res.status(err.status || 500);

  res.render('error', {
    message: err.message,
    error: err
  });

});

module.exports = app;
