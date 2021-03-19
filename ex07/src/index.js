// Only change code below this line

function largestNumFromArr(arr) {
  var array = [...arr];
  var maxNumArray = [];
  for (var i = 0; i < array.length; i++) {
    var maxNum = 0;
    for (var j = 0; j < array[i].length; j++) {
      if (maxNum < array[i][j]) {
        maxNum = array[i][j];
      }
    }
    maxNumArray.push(maxNum);
  }
  return maxNumArray;
}

// Only change code above this line

console.log(
  largestNumFromArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // Change this line
console.log(
  largestNumFromArr([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
); // Change this line
console.log(
  largestNumFromArr([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // Change this line

module.exports = largestNumFromArr;
