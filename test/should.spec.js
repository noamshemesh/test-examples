var chai = require('chai');
chai.should();
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var IncreaseFactory = require('../src/increase');

describe('Expect examples', function () {
  var tested;

  describe('Increase', function () {
    beforeEach(function () {
      tested = new IncreaseFactory();
    });

    it('should start with value 0', function () {
      tested.get().should.equal(0);
    });

    it('should increase value by 1', function () {
      tested.increase();
      tested.get().should.equal(1);
    });

    it('should return increased value', function () {
      tested.increase().should.equal(1);
    });
  });

  describe('Person', function () {
    var sinon = require('sinon');

    it('should call increase when growing up', function () {
      var spy = sinon.spy(new IncreaseFactory().increase);
      tested = require('../src/person')({ ageIncrease: spy });
      tested.growUp();

      spy.should.have.been.called.once;
    });

    it('should not call increase when initializing', function () {
      var stub = sinon.stub(new IncreaseFactory(), 'increase').throws();
      tested = require('../src/person')({ ageIncrease: stub });

      stub.should.have.not.been.called;
    });

    it('should call increase twice when growing up by 2 years', function () {
      var increaser = new IncreaseFactory();
      var mock = sinon.mock(increaser);
      var expectation = mock.expects('increase').twice().onFirstCall().returns(1).onSecondCall().returns(2);

      tested = require('../src/person')({ ageIncrease: increaser.increase });
      tested.growUp();
      tested.growUp();

      mock.verify();
    });
  })
});