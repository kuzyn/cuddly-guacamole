var env = require('node-env-file');
var morgan = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
// var debug = require('debug')('foodsessions:app');
var server = express();

// load local env variables if we are not in production
if (process.env.NODE_ENV !== 'production') {
  env('.env');
}

///////////////////
// Express setup //
///////////////////

// Point to our public folder
server.use(express.static(path.join(__dirname + '/app/', '_public')));

// Our middlewares
server.use(favicon(path.join(__dirname + '/app/_public', 'favicon.ico')));
server.use(morgan('dev')); // use 'combined' for verbose headers
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure our view engine
server.engine('.hbs', exphbs({
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname + '/app/_views/layouts/'),
  partialsDir: path.join(__dirname + '/app/_views/partials/'),
  extname: '.hbs'
}));
server.set('view engine', '.hbs');
server.set('views', path.join(__dirname + '/app/', '_views'));

// Define our controllers
// var admin = require('./app/admin/admin_controller'); // Docs page route
var client = require('./app/client/client_controller'); // Client page route
var docs = require('./app/docs/docs_controller'); // Docs page route

// Attach our endpoints to our controllers
// server.use('/admin', admin); // Admin page
server.use('/', client); // Client page
server.use('/docs', docs); // Docs page

// Attach API routes
// TODO

////////////////////
// Error handling //
////////////////////

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
