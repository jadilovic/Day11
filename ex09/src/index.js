// Only change code below this line
function myBouncer(arr){
    var arrStart = [...arr];
    var newArray = [];
    for(var i = 0; i < arrStart.length; i++){
        if(arrStart[i]) {
            newArray.push(arrStart[i]);
        }
    }
    return newArray;
}

// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9])) // Change this line
console.log(myBouncer(["a", "b", "c"])) // Change this line
console.log(myBouncer([false, null, 0, NaN, undefined, ""])) // Change this line
console.log(myBouncer([null, NaN, 1, 2, undefined])) // Change this line

module.exports = myBouncer;