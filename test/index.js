
var should = require('should');
var delegate = require('../src/delegate');


var test = function(arg1, arg2){
  return {
    self: this,
    arg1 : arg1,
    arg2 : arg2
  };
};

var obj = {
  name: 'obj'
};



describe('delegate', function() {

  var fun = delegate(obj, test);
  var result = fun('Hello', 'World');

  it('"this" of called function should be delegated obj', function(done){
    result.self.should.equal(obj);
    done();
  });

  it('arg1 and arg2 should be correct', function(done){
    result.arg1.should.equal('Hello');
    result.arg2.should.equal('World');
    done();
  });

  it('should work without arguments', function(done){
    var result2 = fun();
    'undefined'.should.be.equal(typeof result2.arg1);
    'undefined'.should.be.equal(typeof result2.arg2);
    done();
  });

});
