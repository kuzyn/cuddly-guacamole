var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);

///////////
// Tests //
///////////

// Tests will not be commented as they are already quite readable due to http://chaijs.com/api/bdd/

describe('Index', function() {
  it('should return 200', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});

describe('Client', function() {
  it('should return 200', function(done) {
    chai.request(server)
      .get('/client')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
