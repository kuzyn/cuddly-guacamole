var Entry = require('./entry_model');
var express = require('express');
var router = express.Router();

////////////////////
// Client routing //
////////////////////

// get all
router.get('/', function(req, res) {
  Entry.getAll(function(err, result) {
    if (err) {
      res.sendStatus(503);
    }
    res.json(result);
  });
});

// get one
router.get('/:id', function(req, res) {
  res.sendStatus(200);
});

// create one
router.post('/', function(req, res) {

  var payload = {
    message: req.body.message,
    user: "testuser",
    timestamp: Date.now()
  };

  Entry.post(payload, function(err, result) {
    if (err) {
      process.stdout.write("error in saving" + '\n');
      res.sendStatus(503);
    }
    process.stdout.write("Success in saving" + '\n');
    res.json(result);
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
