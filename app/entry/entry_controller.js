var Entry = require('./entry_model');
var express = require('express');
var router = express.Router();

////////////////////
// Client routing //
////////////////////

// get latest
router.get('/', function(req, res) {
  Entry.get(1).then(function(entry){
    if (!entry) {
      res.sendStatus(503);
    }
    res.json(entry);
  });
});

// get n latests
router.get('/:limit', function(req, res) {
  Entry.get(parseInt(req.params.limit)).then(function(entries){
    if (!entries) {
      res.sendStatus(400);
    }
    res.json(entries);
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

  Entry.post(payload).then(function(entry) {
    if (!entry) {
      res.sendStatus(503);
    }
    res.json(entry);
  });
});

// delete one
router.delete('/:id', function(req, res) {
  res.sendStatus(200);
});

// update one
router.put('/:id', function(req, res) {
  res.sendStatus(200);
});

module.exports = router;
