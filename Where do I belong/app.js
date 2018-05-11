
function getIndexToIns(arr, num) {
  // Insert num to array
  arr.push(num);
  // Sort array
  arr = arr.sort(function(a,b) {
    return a-b;
  });
  // Find index of num
  var answer= arr.indexOf(num);

  document.getElementById('output').innerHTML = `The answer is ${answer}`;
 
}

getIndexToIns([10, 20, 30, 40, 50], 35);
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2
// getIndexToIns([40, 60], 50) should return 1
// getIndexToIns([3, 10, 5], 3) should return 0
// getIndexToIns([5, 3, 20, 3], 5) should return 2
// getIndexToIns([2, 20, 10], 19) should return 2
// getIndexToIns([2, 5, 10], 15) should return 3