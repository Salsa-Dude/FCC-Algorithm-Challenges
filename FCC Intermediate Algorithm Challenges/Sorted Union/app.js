function uniteUnique(arr) {
  // Get arguments
  var args = Array.from(arguments);
  var placeholder = [];

 // Loop each array in args
 args.forEach(function(array) {
   // Filter each number in array
   array.filter(function(number) {
     if(placeholder.includes(number) === false) {
       placeholder.push(number);
     }
   });
 });
  return placeholder;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].