// Only change code below this line

function myMutation(arr) {
    var twoStrings = [...arr];
    var str1 = twoStrings[0];
    var str2 = twoStrings[1];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    var s1 = str1.split('');
    var s2 = str2.split('');

    // removing duplicates
    s1 = [...new Set(s1)];
    s2 = [...new Set(s2)];

    // sorting
    s1.sort();
    s2.sort();
    
    var testing;
    s1.length < s2.length ? testing = s1.length : testing = s2.length;

    for(var i = 0; i < testing; i++){
        if(s1[i] != s2[i]){
            return false;
        }
    }
    return true;
  }
  
  // Only change code above this line
  
  console.log(myMutation(["hello", "Hello"])); // Change this line
  console.log(myMutation(["Mary", "Army"])); // Change this line
  console.log(myMutation(["hellofdgdfgdfgqrstu", "qrstu"])); // Change this line
  console.log(myMutation(["Mary", "Army"])); // Change this line
  console.log(myMutation(["hello", "Hello"])); // Change this line
  console.log(myMutation(["Mary", "Army"])); // Change this line
  console.log(myMutation(["hello", "Hello"])); // Change this line
  console.log(myMutation(["Mary", "Army"])); // Change this line
  module.exports = myMutation;