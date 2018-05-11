
function largestOfFour(arr) {
  // You can do this!

  arr.forEach(function(array) {
     return array.sort(function(a, b) {
      return b - a;
    });
  });
  arr.forEach(function(array) {
   return array.splice(1, array.length);
  });
  arr = arr.reduce(function(a,b) {
    return a.concat(b);
  });

  console.log(arr);

  document.getElementById('output').innerHTML = `<p> The Answer is [${arr}] `;

}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);