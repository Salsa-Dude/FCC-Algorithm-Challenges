
function findElement(arr, func) {
  var newArray = arr.filter(func);
  return newArray.shift();
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; }));
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.