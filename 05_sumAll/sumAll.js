const sumAll = function (start, end) {
  let sum = 0;

  if (
    start > 0 &&
    end > 0 &&
    Number.isInteger(start) &&
    Number.isInteger(end) &&
    typeof start === "number" &&
    typeof end === "number"
  ) {
    if (start < end) {
      for (let i = start; i <= end; i++) {
        sum = sum + i;
      }
    } else if (start > end) {
      for (let i = start; i >= end; i--) {
        sum = sum + i;
      }
    }
  } else {
    return "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
