

function myReplace(str, before, after) {

  // Check for Uppercase
  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Replace str
  str = str.replace(before,after);

  return str;
}
 
 console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
//  myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
//  myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
//  myReplace("His name is Tom", "Tom", "john") should return "His name is John".
//  myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".