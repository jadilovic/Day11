// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  console.log(newMonitorsList);
  // only change code below this line
  var monitorsList = [];
  for (var i = 0; i < newMonitorsList.length; i++) {
    monitorsList.push([newMonitorsList[i], i + 1]);
  }
  return monitorsList;
  // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line

module.exports = myMonitorsFunction;
