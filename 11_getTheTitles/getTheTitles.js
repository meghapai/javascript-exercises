const getTheTitles = function (arr) {
  let bookArr = [];
  for (let i = 0; i < arr.length; i++) {
    bookArr.push(arr[i].title);
  }
  return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
