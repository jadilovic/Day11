// Only change code below this line

function multiplyArrayFunction(myArray) {
  var array = [...myArray];
  var product = 1;
  var sum = 0;
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      sum += array[i][j];
      product *= array[i][j];
    }
  }
  arr.push(product, sum);
  return arr;
}

// Only change code above this line

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]])); // Change this line
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]])); // Change this line

module.exports = multiplyArrayFunction;
