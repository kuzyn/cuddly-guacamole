var debug = require('debug')('foodsessions:routes/player');
var express = require('express');
var router = express.Router();

///////////////////
// Admin routing //
///////////////////

// where we send our GET to localhost:port/
router.get('/', function(req, res) {
    debug('GET');
    res.render('player_view', {
        page: "player",
        jplayer: true
    });
});

module.exports = router;
