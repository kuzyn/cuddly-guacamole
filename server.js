var env = require('node-env-file');
var database = require('./lib/database');
var morgan = require('morgan');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var server = express();

// load local env variables if we are not in production
if (process.env.NODE_ENV !== 'production') {
    env('.env');
}


////////////////////
// Database setup //
////////////////////

// Connect to Mongo
database.connect(process.env.MONGODB_URI, function(err) {
    if (err) {
        process.stdout.write('Unable to connect to database' + '\n');
        throw err;
    } else {
        process.stdout.write('Connected to database' + '\n');
    }
});

// // Close connection to Mongo
// database.close(function(err) {
//   if (err) {
//     process.stdout.write('Problem when closing database' + '\n');
//   } else {
//     process.stdout.write('Closed database' + '\n');
//   }
// });


///////////////////
// Express setup //
///////////////////

// Point to our public folder
server.use(express.static(path.join(__dirname + '/app/', '_public')));

// Our middlewares
server.use(favicon(path.join(__dirname + '/app/_public', 'favicon.ico')));
server.use(morgan('dev')); // use 'combined' for verbose headers

server.use(bodyParser.urlencoded({ extended: false }));
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

// Page controllers
var admin = require('./app/admin/admin_controller'); // Admin page route
var client = require('./app/client/client_controller'); // Client page route
var docs = require('./app/docs/docs_controller'); // Docs page route
var menu = require('./app/menu/menu_controller'); // Menu page route
var player = require('./app/player/player_controller'); // Player page route

//API controllers
var entry = require('./app/entry/entry_controller');

// Attach our endpoints to our controllers
server.use('/admin', admin); // Admin page
server.use('/', client); // Client page
server.use('/docs', docs); // Docs page
server.use('/menu', menu); // Menu page
server.use('/player', player); // Player page

// Attach API routes
server.use('/entry', entry); // Docs page


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
    process.stdout.write(err);
    res.render('error', {
        message: err.message,
        error: err
    });
});

module.exports = server;
