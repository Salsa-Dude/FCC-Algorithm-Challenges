
function sumFibs(num) {
  var fib = [1,1];
  
  Array.prototype.last = function() {
    return this[this.length - 1];
  }

  Array.prototype.secondToLast = function() {
    return this[this.length -2];
  }

  while(fib.secondToLast() + fib.last() <= num) {
    fib.push(fib.secondToLast() + fib.last());
  }

  return fib
  .filter(function(number) {
    return number % 2 !== 0;
  }).reduce(function(a,b) {
    return a + b;
  });

}

console.log(sumFibs(12));