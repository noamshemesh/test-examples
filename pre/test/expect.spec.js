var chai = require('chai');
var expect = chai.expect;

var NumberFactory = require('../pre/number');

describe('Expect examples', function () {
  var tested;

  describe('Number', function () {
    beforeEach(function () {
      tested = new NumberFactory();
    });

    it('should start with value 0', function () {
      expect(tested.get()).to.equal(0);
    });

    it('should increase value by 1', function () {
      tested.increase();
      expect(tested.get()).to.equal(1);
    });

    it('should return increased value', function () {
      expect(tested.increase()).to.equal(1);
    });
  });
});
