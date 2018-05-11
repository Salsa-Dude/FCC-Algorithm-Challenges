
function destroyer(arr) {
  // get agruements
  var args = Array.prototype.slice.call(arguments,1);
  
  arr = arr.filter(function(number) {
    if(!args.includes(number)) {
      return true;
    }
  });
  
  
  document.getElementById('output'). innerHTML = `The Answer is ${arr}`;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].