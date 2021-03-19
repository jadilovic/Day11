// Only change code below this line
function mySplice(arr1, arr2, n){
    var arr1 = [...arr1];
    var arr2 = [...arr2];
    var newArr = [];
    arr1 = arr1.reverse();
    if(n == 2){
        for(var i = 0; i < arr1.length; i++){
            arr2.push(arr1[i]);
            newArr = arr2;
        }
    }

    if(n == 1){
        arr1.unshift(arr2[0]);
        arr1.push(arr2[1]);
        newArr = arr1;
    }

    return newArr;
}

// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1)) // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2)) // Change this line
console.log(mySplice(["b", "c"], ["a", "d"], 1)) // Change this line
module.exports = mySplice;