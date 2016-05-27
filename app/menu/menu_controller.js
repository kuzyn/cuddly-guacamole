var debug = require('debug')('foodsessions:routes/index');
var express = require('express');
var router = express.Router();

/////////////////////
// Landing routing //
/////////////////////

// where we send our GET to localhost:port/
router.get('/', function(req, res) {
    debug('GET');
    res.render('menu_view', {
        page: "menu"
    });
});

module.exports = router;
