
function pairElement(str) {
  // Split str into an array
  str = str.split('');
  
  var pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };

  // Map str and return sub array
  return str.map(function(letter) {
    return [letter, pairs[letter]];
  });
}

console.log(pairElement("GCG"));
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].