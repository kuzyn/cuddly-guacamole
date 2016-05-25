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
    getAll: function() {
        ThisModel.find({}, function(err, entries) {
          if (err) {
              throw err;
          }
          console.log(entries);
        });
    },
    post: function(payload, callback) {
        var m = new ThisModel(payload);
         m.save(function(err) {
            if (err) {
                return callback(err);
            }
            return callback();
        });
    }
};
