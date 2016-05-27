var mongoose = require('mongoose');
var db = require('../../lib/database');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var locationSchema = new Schema({
    id: ObjectId,
    name: String,
    path: String,
    message: {
        type: String,
        default: ""
    },
    utcOffset: Number
});

var locationModel = db.get().model('Location', locationSchema);

module.exports = {
    // read from db
    read: function(cb) {
        locationModel
            .find({})
            .exec(function(error, result) {
                cb(error, result);
            });
    },
    // write in db
    create: function(payload, cb) {
        var model;
        model = new locationModel(payload);
        model.save(cb);
    }
};
