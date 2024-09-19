const reverseString = function (string) {
  return string.split("").reverse().join("");
};

let reversedString = reverseString("hello");
console.log(reversedString);
// Do not edit below this line
module.exports = reverseString;
