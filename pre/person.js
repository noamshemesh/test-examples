module.exports = function (overrides) {
  var NumberFactory = require('./number');

  overrides = overrides || {};
  var ageIncrease = overrides.ageIncrease || new NumberFactory().increase;

  return {
    growUp: ageIncrease
  }
}
