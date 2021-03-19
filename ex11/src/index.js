// Only change code below this line
function splitArrayInGroups(arr, n){
    var arrStart = [...arr];
    var newArray = [];
    var count = 0;
        for(var i = 0; i < arrStart.length;){
            var inArr = [];
            for(var j = 0; j < n; j++, i++){
                if(arrStart[i] == undefined){
                    break;
                }
                inArr.push(arrStart[i]);
            }
            newArray.push(inArr);
            count++;
            if(count == n)
            break;
        }
    return newArray;
}

// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)) // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2)) // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)) // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) // Change this line

module.exports = splitArrayInGroups;