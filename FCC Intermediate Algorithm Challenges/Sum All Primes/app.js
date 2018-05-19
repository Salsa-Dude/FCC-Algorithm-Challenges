
function sumPrimes(num) {
  var primes = [];

  // Loop each i and run the isPrime function
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  // Add each number in primes array
  return primes.reduce(function(a,b) {
    return a + b;
  });
}

// test num if its divisible by each j
function isPrime(num) {
  for(var j = 2; j < num; j++) {
    if(num % j === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(sumPrimes(10));
// sumPrimes(977) should return 73156.