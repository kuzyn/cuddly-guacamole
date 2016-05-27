var Entry = require('./entry_model');
var express = require('express');
var router = express.Router();

////////////////////
// Client routing //
////////////////////

// get latest entry
router.get('/', function(req, res) {
    Entry.read(1, function(err, doc) {
        if (err) {
            res.sendStatus(503);
        }
        res.json(doc);
    });
});

// get n latests entries
router.get('/:limit', function(req, res) {
    Entry.read(parseInt(req.params.limit), function(err, docs) {
        if (err) {
            res.sendStatus(503);
        }
        res.json(docs);
    });
});

// create one
router.post('/', function(req, res) {
    var payload = {
        message: req.body.message,
        category: "foo",
        user: "bar",
        timestamp: new Date()
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