function translatePigLatin(str) {
  
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var strArray = str.split('');
  
  // Check first letter
  if(vowels.includes(str.charAt(0))) {
    return str + 'way';
  } else {
    // Find the first Consonant letter
     for(var i = 0; i < str.length; i++) {
       // Push Non-consonant letter from str
       if(!vowels.includes(str[i])) {
         strArray.push(strArray.shift());
       } else {
         strArray.push('ay');
         return strArray.join('');
       }
     }
  }
  
}

console.log(translatePigLatin("california"));
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".