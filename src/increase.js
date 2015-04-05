module.exports = function () {
  var i = 0;

  function increase() {
    return ++i;
  }
  function get() {
    return i;
  }

  return {
    increase: increase,
    get: get
  }
}
