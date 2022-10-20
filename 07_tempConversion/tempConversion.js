const ftoc = function(temp) {
  let tempConv = (temp - 32) * (5 / 9);
  let tempConvRounded = Math.round(tempConv * 10) / 10;

  return tempConvRounded;
};

const ctof = function(temp) {
  let tempConv = (temp * (9 / 5)) + 32;
  let tempConvRounded = Math.round(tempConv * 10) / 10;

  return tempConvRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
