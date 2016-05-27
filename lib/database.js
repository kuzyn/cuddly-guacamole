var mongoose = require('mongoose');

var state = {
    db: null
};

module.exports = {
    // With an URI and a callback connect to the db server
    connect: function(uri, callback) {
        var db;
        if (state.db) {
            return callback();
        } else {
            db = mongoose.createConnection(uri);
            state.db = db;
        }

        // listener for error
        db.on('error', function(err) {
            if (err) {
                callback(err);
            }
        });

        // listener for success
        db.once('open', function() {
            callback();
        });

    },
    // retrieve our database object
    get: function() {
        return state.db;
    },
    // close our database object
    close: function(callback) {
        if (state.db) {
            state.db.close(function(err) {
                if (err) {
                    callback(err);
                } else {
                    state.db = null;
                    callback();
                }
            });
        }
    },
};