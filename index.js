"use strict";

var isInteger = function isInteger(n) {
  var isValid = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      value = +value;
      isValid = isValid && Math.round(value) === value && value >= 0 && value < 256;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return isValid;
};

var rh = function rh() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!isInteger([r, g, b])) {
    throw new Error("RGB values should be integer values in the range 0-255 with bounds included");
  }
  return ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
};

module.exports = rh;
