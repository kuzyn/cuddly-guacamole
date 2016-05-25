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
    // refactor below, seems too complicated
    getAll: function(callback) {
        ThisModel.find({}, function(err, entries) {
          if (err) {
              return callback(err, null);
          }
          return callback(null, entries);
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
