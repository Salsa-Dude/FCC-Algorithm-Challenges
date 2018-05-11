
function rot13(str) { 
  var splitArray = str.split('');
  
  return splitArray.map(function(letter) {
    letter = letter.charCodeAt();
    if(letter >= 65 && letter <= 77) {
      letter += 13;
    } else if(letter >= 78 && letter <= 90) {
      letter -= 13;
    }

   return String.fromCharCode(letter);
    
  }).join('');

}


document.getElementById('output').innerHTML = ` The answer is ${rot13("SERR PBQR PNZC")}`;
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

