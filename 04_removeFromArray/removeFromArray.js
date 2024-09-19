const removeFromArray = function (array, ...args) {
  // let index = array.indexOf(num);

  // if (index > -1) {
  //   array.splice(index, 1);
  // }

  // return array;
  return array.filter((x) => !args.includes(x));
};

let newArray = removeFromArray([1, 2, 3, 4], 3);
console.log(newArray);
// Do not edit below this line
module.exports = removeFromArray;
