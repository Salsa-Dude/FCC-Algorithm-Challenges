

function steamrollArray(arr) {
  var placeHolder = [];

  // Call function
  roll(arr);

  // Loop each item in array 
  // Keep calling function until item is no longer an array (recursion)
  function roll(arr) {
    arr.forEach(function(item) {
      if(!Array.isArray(item)) {
        placeHolder.push(item);
      } else {
        roll(item);
      }
    });
  }

  return placeHolder;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].