var debug = require('debug')('foodsessions:routes/client');
var express = require('express');
var router = express.Router();

////////////////////
// Client routing //
////////////////////

// where we send our GET to localhost:port/
router.get('/', function(req, res) {
    debug('GET');
    res.render('client_view', {
        page: "client"
    });
});

module.exports = router;
