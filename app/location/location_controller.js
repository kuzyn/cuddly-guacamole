var Entry = require('./location_model');
var express = require('express');
var router = express.Router();

////////////////////
// Client routing //
////////////////////

// get all location
router.get('/', function(req, res) {
    Entry.read(function(err, doc) {
        if (err) {
            res.sendStatus(503);
        }
        res.json(doc);
    });
});

// create one
router.post('/', function(req, res) {
    var payload = {
        name: req.body.locationName,
        path: '/' + req.body.locationName + '/',
        utcOffset: null // need to get timezone and compute the offset
    };

    Entry.create(payload, function(err, doc) {
        if (err) {
            res.sendStatus(503);
        }
        res.json(doc);
    });
});

//todo: delete one
router.delete('/:id', function(req, res) {
    // Entry.delete(payload, function(err, doc) {
    // if (err) {
    //   res.sendStatus(503);
    // }
    // res.json(doc);
    // }
    res.sendStatus(200);
});

//todo: update one
router.put('/:id', function(req, res) {
    // Entry.update(payload, function(err, doc) {
    // if (err) {
    //   res.sendStatus(503);
    // }
    // res.json(doc);
    // }
    res.sendStatus(200);
});

module.exports = router;
