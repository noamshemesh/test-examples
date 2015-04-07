var chai = require('chai');
var proxyquire = require('proxyquire');
chai.should();
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var IncreaseFactory = require('../src/number');

describe('Expect examples', function () {
  var tested;

  describe('Person', function () {
    var sinon = require('sinon');

    it('should not call increase when initializing', function () {
      var increaser = new IncreaseFactory();
      var stub = sinon.stub(increaser, 'increase').returns(1);
      var Person = proxyquire('../src/person', { './number': function () { return increaser } });

      tested = new Person();
      tested.growUp();

      stub.should.have.been.called.once;
    });

    it('should call increase twice when growing up by 2 years', function () {
      var increaser = new IncreaseFactory();
      var mock = sinon.mock(increaser);
      var expectation = mock.expects('increase').twice().onFirstCall().returns(1).onSecondCall().returns(2);
      var Person = proxyquire('../src/person', { './number': function () { return increaser } });

      tested = new Person();
      tested.growUp();
      tested.growUp();

      mock.verify();
    });
  })
});
