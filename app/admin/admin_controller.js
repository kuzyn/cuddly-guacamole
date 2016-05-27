var debug = require('debug')('foodsessions:routes/admin');
var express = require('express');
var router = express.Router();

///////////////////
// Admin routing //
///////////////////

// where we send our GET to localhost:port/
router.get('/', function(req, res) {
    debug('GET');
    res.render('admin_view', {
        page: "admin"
    });
});

module.exports = router;
