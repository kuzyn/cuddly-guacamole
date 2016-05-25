var mongoose = require('mongoose');
var db = require('../../lib/database');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ThisSchema = new Schema({
    id : ObjectId,
    user: String,
    message: String,
    timestamp: {
      type: Date,
      default: Date.now()
    }
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
    post: function(payload, callback) {
        var m = new ThisModel(payload);
         m.save(function(err, result) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
};
