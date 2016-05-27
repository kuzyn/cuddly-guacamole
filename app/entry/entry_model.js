var mongoose = require('mongoose');
var db = require('../../lib/database');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var entrySchema = new Schema({
    id: ObjectId,
    user: String,
    category: String,
    message: {
        type: String,
        default: ""
    },
    timestamp: Date
});

var entryModel = db.get().model('Entry', entrySchema);

module.exports = {
    // read from db
    read: function(num, cb) {
        entryModel
            .find({})
            .sort({
                timestamp: -1
            })
            .limit(num)
            .exec(function(error, result) {
                cb(error, result);
            });
    },
    // write in db
    create: function(payload, cb) {
        var model;
        var offset = payload.timestamp.getTimezoneOffset();

        //todo: remember to bind to location timezone
        payload.timestamp = payload.timestamp.getTime() - offset * 60000;
        model = new entryModel(payload);

        model.save(cb);
    }
};