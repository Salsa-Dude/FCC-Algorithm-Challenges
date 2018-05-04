
function repeatStringNumTimes(str, num) {
  // repeat after me
  const output = document.getElementById('output');
 
  if(num > 0) {
    output.innerHTML = ` The answer is ${str.repeat(num)}`;
  } else {
    console.log('');
  }
  
} 

repeatStringNumTimes("abc", 4);
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".