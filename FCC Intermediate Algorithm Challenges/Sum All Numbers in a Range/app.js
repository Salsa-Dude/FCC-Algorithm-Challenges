
function sumAll(arr) {
  var maxNum;
  var minNum;
  
  var placeHolder = [];
 
  // Find max and min
 arr.reduce(function(a,b) {
   maxNum = Math.max(a,b);
   minNum = Math.min(a,b);
 });
 
 // Loop numbers in between and push to array
 for(var i = minNum ; i <= maxNum; i++) {
    placeHolder.push(i);
  }
  
 return placeHolder.reduce(function(a,b) {
    return a + b;
  });
}

sumAll([10, 5]);
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.