module.exports = function (overrides) {
  var IncreaseFactory = require('./increase');

  overrides = overrides || {};
  var ageIncrease = overrides.ageIncrease || new IncreaseFactory().increase;

  return {
    growUp: ageIncrease
  }
}
