const isInteger = n => {
  let isValid = true;
  for (let value of n) {
    value = +value;
    isValid =
      isValid && (Math.round(value) === value && value >= 0 && value < 256);
  }
  return isValid;
};

const rh = (r = 0, g = 0, b = 0) => {
  if (!isInteger([r, g, b])) {
    throw new Error(
      "RGB values should be integer values in the range 0-255 with bounds included"
    );
  }
  return ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
};

module.exports = rh;
