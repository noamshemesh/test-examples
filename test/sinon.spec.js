var chai = require('chai');
var expect = chai.expect;
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var NumberFactory = require('../pre/number');

describe('Expect examples', function () {
  var tested;

  describe('Person', function () {
    var sinon = require('sinon');

    it('should call increase when growing up', function () {
      var spy = sinon.spy(new NumberFactory().increase);
      tested = require('../pre/person')({ ageIncrease: spy });
      tested.growUp();

      expect(spy).to.be.calledOnce;
    });

    it('should not call increase when initializing', function () {
      var stub = sinon.stub(new NumberFactory(), 'increase').throws();
      tested = require('../pre/person')({ ageIncrease: stub });

      expect(stub).to.not.be.called;
    });

    it('should call increase twice when growing up by 2 years', function () {
      var increaser = new NumberFactory();
      var mock = sinon.mock(increaser);
      var expectation = mock.expects('increase').twice().onFirstCall().returns(4).onSecondCall().returns(20);

      tested = require('../pre/person')({ ageIncrease: increaser.increase });
      expect(tested.growUp()).to.equal(4);
      expect(tested.growUp()).to.equal(20);

      mock.verify();
    });
  });
});
