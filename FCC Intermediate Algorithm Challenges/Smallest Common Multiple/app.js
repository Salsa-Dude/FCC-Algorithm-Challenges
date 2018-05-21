
function smallestCommons(arr) {
  // min and max values
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];

  // Push all values between min and max into array
  for(var i = min; i <= max; i++) {
    range.push(i);
  }
 
  var flag = true;
  var LCM = 0;

  // While true, check if LCM is divisible by each j in loop
  // If not break and increment LCM
  // Else return false and end while loop
  while(flag) {
    LCM++;
    for(var j = min; j <= max; j++) {
      if(LCM % j !== 0) {
        break;
      } else if (j === max) {
        flag = false;
      }
    }
  }

  return LCM;

}


console.log(smallestCommons([1, 13]));
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([23, 18]) should return 6056820.

