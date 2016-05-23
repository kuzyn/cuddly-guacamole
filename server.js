var debug = require('debug')('foodsessions:app');
var env = require('node-env-file');
var morgan = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var server = express();

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
var index = require('./routes/index'); // Index page route
var client = require('./routes/client'); // Client page route

// Middlewares
server.use(favicon(path.join(__dirname + '/public', 'favicon.ico')));
server.use(morgan('dev')); // use 'combined' for complete headers
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

// View engine setup
server.engine('handlebars', exphbs({defaultLayout: 'default'}));
server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'views'));

// Public folder setup
server.use(express.static(path.join(__dirname, 'public')));

// Attach server views (aka pages)
server.use('/', index); // Client page view
server.use('/client', client); // Client page view

// Attach API routes
// TODO

// Catch 404 and next() to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler development (will print stacktrace)
server.use(function(err, req, res) {
  res.status(err.status || 500);

  res.render('error', {
    message: err.message,
    error: err
  });

});

module.exports = server;
