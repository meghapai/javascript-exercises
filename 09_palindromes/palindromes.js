const palindromes = function (str) {
  let validChar = "abcdefghijklmnopqrstuvwxyz0123456789";
  let palindrome = str
    .trim()
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .filter((str) => validChar.includes(str))
    .join("");

  let reverseStr = palindrome.split("").reverse().join("");

  if (palindrome === reverseStr) return true;
  else return false;
};
console.log(palindromes("racecar!"));

// Do not edit below this line
module.exports = palindromes;
