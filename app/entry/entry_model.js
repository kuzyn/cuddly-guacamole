var mongoose = require('mongoose');
var db = require('../../lib/database');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ThisSchema = new Schema({
    id : ObjectId,
    user: String,
    category: String,
    message: {
        type: String,
        default: ""
    },
    timestamp: Date
});

var ThisModel = db.get().model('Entry', ThisSchema);

module.exports = {
    get: function(num) {
        return ThisModel
        .find({})
        .sort({timestamp: -1})
        .limit(num)
        .exec(function(err) {
            if (err) {
                throw err;
            }
        });
    },
    post:
    function(payload) {
        var model;
        var offset = payload.timestamp.getTimezoneOffset(); //todo: remember to bind to location timezone

        payload.timestamp = payload.timestamp.getTime() - offset * 60000;
        model = new ThisModel(payload);

        return model.save();
    }
};
