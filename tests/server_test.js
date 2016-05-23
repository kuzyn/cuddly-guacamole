var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Client', function() {
  it('should return 200', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});

describe('Docs', function() {
  it('should return 200', function(done) {
    chai.request(server)
      .get('/docs')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
