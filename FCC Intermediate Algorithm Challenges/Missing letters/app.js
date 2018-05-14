function fearNotLetter(str) {
  // Turn str into array and map each letter to its UTF code
  var numbers = str.split('').map(function(letter) {
    return letter.charCodeAt();
  });

  // Loop and sort array to find the missing number
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i + 1] - numbers[i] > 1) {
      // Convert number UTF code to string
      return String.fromCharCode(numbers[i] + 1);
    }
  }
}

console.log(fearNotLetter("abce"));
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.